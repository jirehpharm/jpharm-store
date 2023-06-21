import express, { Express, Response } from "express";
import http from "http";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import { ApolloServerPluginDrainHttpServer } from "@apollo/server/plugin/drainHttpServer";
import { GraphQLSchema } from "graphql";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

// Load environment variables from .env file
dotenv.config();

// Importing custom modules
import prisma from "./src/utils/prisma";
import routes from "./src/routes";
import { schema } from "./src/graphql/schema";
import { IGraphQLContext } from "./src/graphql/graphql";
import { authenticate } from "./src/middleware/authenticate";

// Setting up port
const port: number = process.env.PORT ? parseInt(process.env.PORT, 10) : 4001;

(async (): Promise<void> => {
  // Initializing Express app
  const app: Express = express();

  // Creating a http server
  const httpServer: http.Server = http.createServer(app);

  // Adding middlewares to the Express app
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(cors<cors.CorsRequest>());

  // Adding custom routes to Express app
  app.use(routes());

  // Setting up a route to test Express server
  app.get("/", (_, res: Response) =>
    res.send({
      status: "OK",
      message: `JPharm Server is up and running`,
      express: `http://localhost:${port}`,
      graphql: `http://localhost:${port}/graphql`,
    })
  );

  // Creating an Apollo server
  const server: ApolloServer = new ApolloServer<IGraphQLContext>({
    schema: schema as GraphQLSchema,
    plugins: [
      // Adding a plugin to drain the HTTP server when the Apollo server is stopped
      ApolloServerPluginDrainHttpServer({ httpServer }),
    ],
  });

  // Starting the Apollo server
  await server.start();
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req }) => {
        const prisma = new PrismaClient();
        if (req.headers["x-access-mode"] === "public") {
          return {
            prisma,
            user: null,
          };
        }

        const isAuthenticated = authenticate(req);

        if (!isAuthenticated.success) {
          throw new Error(isAuthenticated.message);
        }

        return {
          prisma,
          user: isAuthenticated?.user || {},
        };
      },
    })
  );

  // Starting the http server
  await new Promise<void>((resolve) => httpServer.listen({ port }, resolve));

  // Logging the server URLs
  console.log(`[Express] server ready at http://localhost:${port}/`);
  console.log(`[GraphQL] server ready at http://localhost:${port}/graphql`);
})();
