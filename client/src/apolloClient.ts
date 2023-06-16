// import { ApolloClient, InMemoryCache } from "@apollo/client";
export { gql, ApolloProvider } from "@apollo/client";
import { ApolloClient, InMemoryCache, from, HttpLink } from "@apollo/client";
import { onError } from "@apollo/client/link/error";

const graphUrl = import.meta.env.VITE_GRAPHQL_URL;
console.log("graphUrl: ", graphUrl);

// export const apolloClient = new ApolloClient({
//   uri: graphUrl,
//   cache: new InMemoryCache(),
//   defaultOptions: {
//     query: {
//       errorPolicy: "all",
//     },
//   },
// });

const httpLink = new HttpLink({
  uri: "http://localhost:4002",
});

// Log any GraphQL errors or network error that occurred
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError)
    console.error(`[Network error]: ${JSON.stringify(networkError, null, 2)})`);
});

export const client = new ApolloClient({
  link: from([errorLink, httpLink]), // `httpLink` must be the last
  cache: new InMemoryCache(),
});

export default client;
