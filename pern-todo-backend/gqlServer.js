const { ApolloServer } = require('apollo-server')

const typeDefs = require('./GraphQL/typeDefs')
const resolvers = require('./GraphQL/Resolvers')
const { likesDataLoader, commentsDataLoader } = require('./GraphQL/Resolvers/queryFunctions')
const pool = require('./db')
require("dotenv").config()


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: ({ req }) => ({
        loaders: {
            likesLoader: likesDataLoader(),
            commentsLoader: commentsDataLoader()
        },
        req
    })
})

pool.connect(err => {
    if (err) console.log(err)
    else {
        console.log('DB connected')
        server.listen({ port: process.env.PORT })
            .then(res => console.log('Graphql server running on', res.port))
            .catch(err => console.log(err))
    }
})
