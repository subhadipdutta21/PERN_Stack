const { AuthenticationError } = require('apollo-server');



module.exports = {

    authMiddleware: (ctx) => {
        console.log(ctx.req.headers)
        const authHeader = ctx.req.headers.authorization
        const token = authHeader

        if(token) {
            return true            
        } else {
            throw new AuthenticationError('you must be logged in')
        }
    }
}