const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt')
const pool = require('../../db')
const config = require('config')
const { OAuth2Client } = require('google-auth-library');

const { likesByIds, likesByPostId } = require('./queryFunctions');
const client = new OAuth2Client(process.env.OAUTH2CLIENT)
require("dotenv").config();


module.exports = {

    Query: {
        authenticateUser: async (_, args, context, info) => {
            let { email, password } = args.input
            try {
                let useCheckResp = await pool.query('SELECT * FROM users WHERE email=($1)', [email])
                if (useCheckResp.rowCount !== 0) {
                    // user found check password                
                    if (bcrypt.compareSync(password, useCheckResp.rows[0].password)) {
                        // passwords matched ,generate JWT
                        const payload = { id: useCheckResp.rows[0].user_id }
                        let token = await jwt.sign(payload, config.get('jwtSecret'))
                        console.log(token)
                        return { message: 'login successful', error: null, token }
                    } else return { error: true, message: 'wrong password!' }

                } else return { error: true, message: 'user does not exist!' }

            } catch (error) { return { error: true, message: error } }
        },

        oAuth: async (_, args, context, info) => {
            console.log(args.input)
            const { token } = args.input
            // verify token
            try {
                const ticket = await client.verifyIdToken({
                    idToken: token,
                    audience: process.env.OAUTH2CLIENT
                })
                console.log(ticket.getPayload())
                const user = ticket.getPayload()
                // check if user exists
                let useCheckResp = await pool.query('SELECT * FROM users WHERE email=($1)', [user.email])
                if (useCheckResp.rowCount !== 0) {
                    //user found      
                    console.log('user found returning token', useCheckResp.rows[0])
                    let { name, email, picture, user_id } = useCheckResp.rows[0]
                    const payload = { id: useCheckResp.rows[0].user_id }
                    let token = await jwt.sign(payload, config.get('jwtSecret'))
                    return { message: 'login successful!', error: null, token, name, email, picture, user_id }
                } else {
                    // create user    
                    console.log('creating new user')
                    const { name, email, picture } = user
                    let userInsertResp = await pool.query('INSERT INTO users(name,email,picture) VALUES ($1,$2,$3) RETURNING *', [name, email, picture])
                    const payload = { id: userInsertResp.rows[0].user_id }
                    let token = await jwt.sign(payload, config.get('jwtSecret'))
                    return { error: false, message: 'User registered successfully!', token, name, email, picture, user_id: payload.id }
                }
            } catch (error) { return { error: true, message: 'Wrong Creds!' } }
        },


        fetchPosts: async (parent, args, context, info) => {
            console.log(args.input)
            let { offset } = args.input
            let limit = 5
            try {
                console.log('called fetch posts')
                let postResp = await pool.query('SELECT p2.id,p2.body,p2.user_id, u."name",u."picture" FROM posts p2 INNER JOIN users u ON u.user_id::uuid = p2.user_id limit $1 offset $2', [limit, offset])
                return postResp.rows
            } catch (error) { console.log(error) }
        },

        fetchCommentsOnPostID: async (_, args, context, info) => {
            let { post_id } = args.input
            try {
                let postResp = await pool.query('SELECT c.comment_id ,c."comment",u2.email ,c.is_deleted , u2."name"  FROM "comments" c INNER JOIN users u2 ON c.commentator_user_id = u2.user_id WHERE post_id =($1)', [post_id])
                console.log(postResp.rows)
                let commentsResp = []
                postResp.rows.map(itm => commentsResp.push({
                    commentator_id: itm.user_id, commentator_name: itm.name,
                    commentator_email: itm.email, comment: itm.comment, isDeleted: !!itm.is_deleted
                }))

                return commentsResp
            } catch (error) { }
        },

        mentions: async (parent, args, context, info) => {
            console.log(args.input)
            let { searchTerm } = args.input
            try {
                let suggestions = await pool.query('SELECT name,picture FROM users WHERE LOWER(name) LIKE $1', [searchTerm.toLowerCase() + "%"])                
                return { suggestions: suggestions.rows, error: false, message: 'suggestions found' }
            }
            catch (error) { return { error: true, message: error } }
        }


    },

    Post: {
        likes: (parent, args, context) => {
            const { loaders } = context
            return loaders.likesLoader.load(parent.id)
        },

        comments: async (parent, args, context) => {
            const { loaders } = context
            return loaders.commentsLoader.load(parent.id)

        }
    },




    Mutation: {
        register: async (_, args, context, info) => {
            console.log(context, info)
            let { name, email, contact, password } = args.input
            try {
                let existingCheckResp = await pool.query('SELECT * FROM users WHERE email=($1)', [email])
                if (existingCheckResp.rowCount == 0) {
                    // create new user and hash the password                    
                    let hashedPassword = await bcrypt.hashSync(password, 10)
                    try {
                        const resp = await pool.query('INSERT INTO users(name, email,contact, password) VALUES($1,$2,$3,$4) RETURNING * ', [name, email, contact, hashedPassword])
                        return { message: "Successfully registered!", error: null }

                    } catch (error) { return { message: null, error } }

                } else return { message: null, error: 'User already exists!' }

            } catch (error) { return { message: null, error } }
        },


        createPost: async (_, args, context, info) => {
            let { body, user_id, post_id, isDeleted } = args.input
            console.log(args.input)
            if (!!post_id) {
                // find post
                let findPostResp = await pool.query('SELECT * FROM posts p WHERE p.id=($1)', [post_id])
                console.log(findPostResp.rowCount)
                if (findPostResp.rowCount > 0)
                    if (!!isDeleted)
                        return pool.query('UPDATE posts SET is_deleted=($1) WHERE id=($2)', [true, post_id])
                            .then(res => ({ message: 'Post Deleted', error: false }))
                            .catch(err => ({ message: err, error: true }))
                    else
                        // update post
                        return pool.query('UPDATE posts SET body=($1) WHERE id=($2)', [body, post_id])
                            .then(res => ({ message: 'Post updated', error: false }))
                            .catch(err => ({ message: err, error: true }))

                else return { message: 'Post not Found!', error: true }

            } else {
                // create post
                try {
                    let upsertPostResp = await pool.query('INSERT INTO posts(body, user_id) VALUES($1,$2) RETURNING * ', [body, user_id])
                    console.log(upsertPostResp)
                    return { message: 'Post creation successful', error: false }
                } catch (err) { return { message: err, error: false } }
            }

        },

        createLikes: async (_, args, context, info) => {
            let { post_id, user_id } = args.input
            // check if same user and same post then need to unlike back
            try {
                let existing = await pool.query('SELECT * FROM likes l WHERE l.liker_user_id=($2) AND l.post_id=($1)', [post_id, user_id])
                if (existing.rowCount > 0) //unlike
                    pool.query('DELETE FROM likes l where l.liker_user_id=($2) AND l.post_id=($1)', [post_id, user_id])
                        .then(res => ({ message: 'updated', error: false }))
                        .catch(err => ({ message: err, error: true }))
                else
                    return pool.query('INSERT INTO likes l WHERE l.liker_user_id=($2) AND l.post_id=($1)', [post_id, user_id])
                        .then(res => ({ message: 'updated', error: false }))
                        .catch(err => ({ message: err, error: true }))

            } catch (err) { return { message: "", error: err } }

        },


        postComment: async (_, args, context, info) => {
            let { post_id, comment_id, comment, commentator_user_id, isDeleted } = args.input

            try {
                let postCommentResp = await pool.query('INSERT INTO comments( post_id, comment, commentator_user_id, is_deleted) VALUES($1,$2,$3,$4) RETURNING *', [post_id, comment, commentator_user_id, !!isDeleted])
                console.log('___', postCommentResp.rowCount)
                if (postCommentResp.rowCount > 0)
                    return ({ message: 'post comment successful', error: false })

            } catch (err) { return { message: err, error: true } }

        }

    }

}