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

module.exports = {
  PORT,
  NODE_ENV,
};
