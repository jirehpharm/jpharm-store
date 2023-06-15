import knex from "knex";

const pg = knex({ client: "pg", connection: process.env.PG_URL });

export default pg;
