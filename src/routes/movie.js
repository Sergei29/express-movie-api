const express = require("express");
const { chunk } = require("lodash");
const { movies } = require("../data/movies");
const { verifyApiKey, getPageNumber } = require("../middleware");
const { ITEMS_PER_PAGE } = require("../constants");

const movieRouter = express.Router();

movieRouter.use(verifyApiKey, getPageNumber);

movieRouter.get("/", function (req, res, next) {
  const { page } = res.locals;
  const chunked = chunk(movies, ITEMS_PER_PAGE);

  res.status(200).json({
    results: chunked[page - 1],
    total_results: movies.length,
    page,
    total_pages: chunked.length,
  });
});
movieRouter.get("/most_popular", function (req, res, next) {
  const { page } = res.locals;
  const found = movies.filter((current) => !!current.most_popular);
  const chunked = chunk(
    movies.filter((current) => !!current.most_popular),
    ITEMS_PER_PAGE,
  );

  const results = chunked[page - 1];

  res.status(200).json({
    results,
    total_results: found.length,
    page,
    total_pages: chunked.length,
  });
});

module.exports = { movieRouter };
