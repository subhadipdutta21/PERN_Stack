const { ApolloServer } = require('apollo-server')

const typeDefs = require('./GraphQL/typeDefs')
const resolvers = require('./GraphQL/Resolvers')
const { likesDataLoader } = require('./GraphQL/Resolvers/queryFunctions')


const server = new ApolloServer({
    typeDefs,
    resolvers,
    context: () => ({
        loaders: {
            likesLoader: likesDataLoader()
        }
    })
})

server.listen({ port: 5001 })
    .then(res => console.log('Graphql server running', res.port))
    .catch(err => console.log(err))