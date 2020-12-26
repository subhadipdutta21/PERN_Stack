const { AuthenticationError, PubSub } = require('apollo-server');
const pool = require('./db');
const config = require('config');
const jwt = require('jsonwebtoken');
const pubsub = new PubSub()


module.exports = {

    authMiddleware: async (ctx) => {
        console.log('from middleware---')
        let token = null
        if (ctx.req) {
            console.log('middleware called--', ctx.req.headers)            
            token = ctx.req.headers.authorization
            console.log(token)           
        } else {
            console.log('else', ctx.connection.context.Authorization)
            token = ctx.connection.context.Authorization
        }

        if (token) {
            try {
                const verified = jwt.verify(token, config.get('jwtSecret'))
                console.log(verified)
                // logic to retrieve user from id
                let resp = await pool.query('SELECT * FROM users WHERE user_id=$1', [verified.id])
                let userdata = resp.rows[0]
                ctx.user = userdata
                return ctx
            } catch (err) {
                console.log(err);
                throw new AuthenticationError('JWT invalid')
            }
        } 
    },

}