const express = require("express");
const { chunk } = require("lodash");

const { verifyApiKey, getPageNumber } = require("../middleware");
const { findMoviesByTitle, findActorsByName } = require("../utils");
const { ITEMS_PER_PAGE } = require("../constants");

const ERROR_MESSAGE_DEFAULT = "Failed to find results";
const searchRouter = express.Router();

searchRouter.use(verifyApiKey, getPageNumber);

searchRouter.get("/movie", async (req, res, next) => {
  const { page } = res.locals;
  const queryMovieTitle = req.query.query;

  try {
    const movies = await findMoviesByTitle(queryMovieTitle);
    const chunked = chunk(movies, ITEMS_PER_PAGE);
    const results = chunked[page - 1];

    res.status(200).json({
      results,
      total_results: movies.length,
      page,
      total_pages: chunked.length,
    });
  } catch (error) {
    res.statusMessage = error.message || ERROR_MESSAGE_DEFAULT;
    res.status(500).json({ error: error.message || ERROR_MESSAGE_DEFAULT });
  }
});

searchRouter.get("/person", async (req, res, next) => {
  const { page } = res.locals;
  const queryActorName = req.query.query;

  try {
    const actors = await findActorsByName(queryActorName);
    const chunked = chunk(actors, ITEMS_PER_PAGE);
    const results = chunked[page - 1] || [];

    res.status(200).json({
      results,
      total_results: actors.length,
      page,
      total_pages: chunked.length,
    });
  } catch (error) {
    res.statusMessage = error.message || ERROR_MESSAGE_DEFAULT;
    res.status(500).json({ error: error.message || ERROR_MESSAGE_DEFAULT });
  }
});

module.exports = { searchRouter };
