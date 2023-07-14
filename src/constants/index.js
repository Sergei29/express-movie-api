require("dotenv").config();

/**
 * @param { string } name
 * @returns { string }
 */
const getEnvVariable = (name) => {
  if (!process.env[name]) {
    throw new Error(`Env variable ${name} is not set`);
  }
  return process.env[name];
};

const PORT = getEnvVariable("PORT");
const NODE_ENV = getEnvVariable("NODE_ENV");
const THE_MOVIE_DB_API_KEY = getEnvVariable("THE_MOVIE_DB_API_KEY");
const ITEMS_PER_PAGE = 20;

module.exports = {
  PORT,
  NODE_ENV,
  THE_MOVIE_DB_API_KEY,
  ITEMS_PER_PAGE,
};
