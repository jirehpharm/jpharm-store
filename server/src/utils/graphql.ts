// Importing necessary modules
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import prisma from "./prisma";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";

// Importing the schema module that exports GraphQL schema
import { schema } from "../graphql/schema";

// Setting port number for the GraphQL server
const graphqlPort = process.env.GRAPHQL_PORT || "4002";
const useGraphqlPlayground = process.env.USE_GRAPHQL_PLAYGROUND || "true";

// Creating an Apollo server instance with the GraphQL schema and a plugin for the GraphQL Playground
export const graphqlServer = new ApolloServer({
  schema,
});

// Starting the server to listen to requests on the specified port number
// graphqlServer
//   .listen({ port: graphqlPort })
//   .then(({ url }) => console.log(`⚡️[GraphQL]: Server is running at ${url}`));

startStandaloneServer(graphqlServer, {
  context: async () => {
    return {
      prisma,
    };
  },
  listen: { port: parseInt(graphqlPort) },
}).then(({ url }) => {
  console.log(`⚡️[GraphQL]: Server is running at ${url}`);
});

export default graphqlServer;
