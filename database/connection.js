const pg = require("pg");
const dotenv = require("dotenv");
const logger = require("../configuration/logger");

dotenv.config();

const pool = new pg.Pool({
  user: process.env.PG_USER,
  host: process.env.PG_HOST,
  database: process.env.PG_DATABASE,
  password: process.env.PG_PASSWORD,
  port: process.env.PG_PORT,
  max: process.env.PG_MAX_CONNECTIONS,
});

pool.on("error", (err, client) => {
  logger.error("Unexpected error on idle client", err);
  process.exit(-1);
});

module.exports = {
  pool: pool,
};
