import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client'
import { setContext } from '@apollo/client/link/context';
import Cookies from 'js-cookie'


const httpLink = createHttpLink({
    uri: 'http://localhost:5001/',
});

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    const token = Cookies.get('jwt')
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});