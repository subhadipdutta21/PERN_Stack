import { ApolloClient, InMemoryCache } from '@apollo/client'

export const client = new ApolloClient({
    uri: 'http://localhost:5001/',
    cache: new InMemoryCache()
});