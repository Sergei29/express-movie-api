require("dotenv").config();

const getEnvVariable = (name) => {
  try {
    return process.env[name];
  } catch (error) {
    throw error;
  }
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
