const pool = require('../../db')
const Dataloader = require('dataloader');
const Ramda = require('ramda');
const DataLoader = require('dataloader');

const likesByPostId = async (ids) => {
    console.log('called fetch likes', ids)
    let data = await pool.query(`
        SELECT u2."name" ,u2.email ,u2.user_id, l.post_id 
        FROM likes l 
        INNER JOIN users u2 ON l.liker_user_id::uuid = u2.user_id::uuid 
        WHERE l.post_id::text=ANY($1)`,
        [ids]
    )
    let tempdata = data.rows
    const groupedById = Ramda.groupBy(tempdataitm => tempdataitm.post_id, tempdata)
    return Ramda.map(post_id => {
        let tempdata1 = groupedById[post_id]
        let changedKeyNames = []
        if (!!tempdata1) {
            tempdata1.map(d => {
                let { user_id, name, email } = d
                let tempx = {}
                tempx['liker_id'] = user_id
                tempx['liker_name'] = name
                tempx['liker_email'] = email
                changedKeyNames.push(tempx)
            })
        }
        return changedKeyNames
    }, ids)
}


const commentsByPostId = async (ids) => {
    console.log('called fetch comments', ids)
    let data = await pool.query(`
        SELECT u2.user_id,u2.picture, u2.name,u2.email,c2."comment" ,c2.is_deleted ,c2.comment_id, c2.post_id 
        FROM users u2 
        INNER JOIN "comments" c2 ON c2.commentator_user_id::uuid = u2.user_id::uuid 
        WHERE c2.post_id::text=ANY($1)`,
        [ids]
    )

    let tempdata = data.rows
    const groupedById = Ramda.groupBy(tempdataitm => tempdataitm.post_id, tempdata)

    return Ramda.map(post_id => {
        let tempdata1 = groupedById[post_id]
        let changedKeyNames = []
        if (!!tempdata1) {
            tempdata1.map(d => {
                let { user_id, name, email, picture, comment, is_deleted } = d
                let tempx = {}
                tempx['commentator_id'] = user_id
                tempx['commentator_name'] = name
                tempx['commentator_email'] = email
                tempx['picture'] = picture
                tempx['isDeleted'] = is_deleted
                tempx['comment'] = comment
                changedKeyNames.push(tempx)
            })
        }
        return changedKeyNames
    }, ids)
}



module.exports = {
    likesDataLoader: () => new Dataloader(likesByPostId),
    commentsDataLoader: () => new DataLoader(commentsByPostId)
}
