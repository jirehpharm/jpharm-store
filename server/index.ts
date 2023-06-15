import express, { Express, Request, Response } from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
dotenv.config();

import routes from "./src/routes";
import pg from "./src/utils/database";

declare global {
  namespace NodeJS {
    interface Global {
      pg: typeof pg;
    }
  }
}

// Declare the type of global object
declare const global: NodeJS.Global & { pg: typeof pg };
global.pg = pg;

const app: Express = express();
const port = process.env.PORT || 4001;

app.use(bodyParser.json({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes());

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
