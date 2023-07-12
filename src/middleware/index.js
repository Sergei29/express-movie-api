const { Request, Response, NextFunction } = require("express/index");
const { THE_MOVIE_DB_API_KEY } = require("../constants");

const verifyApiKey = (req, res, next) => {
  const { api_key } = req.query;
  if (api_key !== THE_MOVIE_DB_API_KEY) {
    res.status(403).send("Authentication API key required");
    return;
  }
  next();
};

/**
 * @description gets page number integer into `res.locals.page`, defaults to 1
 * @param { Request } req
 * @param { Response } res
 * @param { NextFunction } next
 */
const getPageNumber = (req, res, next) => {
  const { page } = req.query;
  res.locals.page = parseInt(page, 10) || 1;

  next();
};

module.exports = { verifyApiKey, getPageNumber };
