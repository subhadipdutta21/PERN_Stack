const { ApolloServer } = require('apollo-server')
const typeDefs = require('./GraphQL/typeDefs')
const resolvers = require('./GraphQL/Resolvers')
const { likesDataLoader, commentsDataLoader } = require('./GraphQL/Resolvers/queryFunctions')
const { authMiddleware } = require('./Helper')
require("dotenv").config()

const redis = require("redis");
const client = redis.createClient();

client.on('error', (err) => { console.log('redis error', err) })

const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: async (ctx) => {
        return {
            loaders: {
                likesLoader: likesDataLoader(),
                commentsLoader: commentsDataLoader()
            },
            user: await authMiddleware(ctx),
            client
        }
    }
})



server
    .listen({ port: process.env.PORT })
    .then(res => console.log('🚀 Graphql server running on', res.port))
    .catch(err => console.log(err))