const { ApolloServer } = require('apollo-server')

const typeDefs = require('./GraphQL/typeDefs')
const resolvers = require('./GraphQL/Resolvers')
const { likesDataLoader, commentsDataLoader } = require('./GraphQL/Resolvers/queryFunctions')
require("dotenv").config()


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        loaders: {
            likesLoader: likesDataLoader(),
            commentsLoader: commentsDataLoader()
        }
    })
})

server.listen({ port: process.env.PORT })
    .then(res => console.log('Graphql server running', res.port))
    .catch(err => console.log(err))