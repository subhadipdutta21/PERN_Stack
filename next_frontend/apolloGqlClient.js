import { ApolloClient, InMemoryCache, HttpLink, split } from "@apollo/client";
import { WebSocketLink } from "@apollo/client/link/ws";
import { setContext } from "@apollo/client/link/context";
import Cookies from "js-cookie";
import { getMainDefinition } from "@apollo/client/utilities";

let httpLink = new HttpLink({
  uri: "http://localhost:5001/",
});

const authLink = setContext((_, { headers }) => {
  // get the authentication token from local storage if it exists
  const token = Cookies.get("jwt");
  // return the headers to the context so httpLink can read them
  return {
    headers: {
      ...headers,
      authorization: token ?? "",
    },
  };
});

httpLink = authLink.concat(httpLink);

const wsLink = process.browser
  ? new WebSocketLink({
      uri: `ws://localhost:5001/graphql`,
      options: {
        reconnect: true,
        connectionParams: {
          Authorization: Cookies.get("jwt"),
        },
      },
    })
  : null;

const splitLink = process.browser
  ? split(
      ({ query }) => {
        const definition = getMainDefinition(query);
        return (
          definition.kind === "OperationDefinition" &&
          definition.operation === "subscription"
        );
      },
      wsLink,
      httpLink
    )
  : httpLink;

export const client = new ApolloClient({
  link: splitLink,
  cache: new InMemoryCache(),
});

// const client2 = new ApolloClient({
//     link: splitLink,
//     cache: new InMemoryCache()
// });

// export const ApolloProvider = props => {
//     return <Provider client={client2} {...props} />
// }
