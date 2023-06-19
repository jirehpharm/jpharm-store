// Importing necessary modules
import { ApolloServer } from "@apollo/server";
import { startStandaloneServer } from "@apollo/server/standalone";
import prisma from "./prisma";

import { schema } from "../graphql/schema";

const graphqlPort = process.env.GRAPHQL_PORT || "4002";

export const graphqlServer = new ApolloServer({
  schema,
});

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
