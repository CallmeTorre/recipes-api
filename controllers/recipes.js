const { pool } = require("../database/connection");
const logger = require("../configuration/logger");

const getRecipes = async (req, res) => {
  const client = await pool.connect();
  const queryText =
    "SELECT nombre, ingredientes, pasos, tiempo_estimado, tipo, origen FROM recipes";

  try {
    await client.query("BEGIN");
    const recipes = await client.query(queryText);
    res.status(200).json(recipes.rows);
    await client.query("COMMIT");
  } catch (err) {
    logger.error("Unexpected error: ", err);
    await client.query("ROLLBACK");
    res.status(500).json([]);
  } finally {
    logger.info("Releasing database client.");
    client.release();
  }
  return res;
};

module.exports = { getRecipes };
