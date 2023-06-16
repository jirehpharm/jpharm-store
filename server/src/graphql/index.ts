import { ApolloServer } from "apollo-server";
import { ApolloServerPluginLandingPageGraphQLPlayground } from "apollo-server-core";
import { schema } from "./schema";
import { context } from "../context";

const plugins =
  process.env.GRAPHQL_OFFLINE_EDITOR === "true"
    ? [ApolloServerPluginLandingPageGraphQLPlayground()]
    : [];

export const server = new ApolloServer({
  schema,
  context,
  plugins,
});

const port = 4002;
// 2
server.listen({ port }).then(({ url }) => {
  console.log(`🚀[Graphql]  Server ready at ${url}`);
});
