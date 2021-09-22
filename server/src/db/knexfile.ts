import * as dotenv from 'dotenv'
import { Knex } from 'knex';
dotenv.config();

const config: Knex.Config = {
  client: "pg",
  connection: {
    host: process.env.POSTGRES_HOST,
    database: process.env.POSTGRES_DB,
    user: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASS
  },
  migrations: {
    directory: "./src/db/migrations",
    extension: "ts"
  },
  seeds: {
    directory: "./src/db/seeds",
    extension: "ts"
  }
}

export default config;