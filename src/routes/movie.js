const express = require("express");
const path = require("path");
const { chunk } = require("lodash");

const { getPageNumber, requireJSONContentType } = require("../middleware");
const { getFileData, updateMovieRating, deleteMoviebyId } = require("../utils");
const { ITEMS_PER_PAGE } = require("../constants");

const PATH_TO_ALL_MOVIES = path.resolve(__dirname, "..", "data", "movies.json");
const PATH_TO_ALL_MOVIE_DETAILS = path.resolve(
  __dirname,
  "..",
  "data",
  "movieDetails.json",
);

const movieRouter = express.Router();

movieRouter.use(getPageNumber);

movieRouter.get("/", async (req, res, next) => {
  const { page } = res.locals;
  const data = await getFileData(PATH_TO_ALL_MOVIES);

  const chunked = chunk(data, ITEMS_PER_PAGE);

  res.status(200).json({
    results: chunked[page - 1],
    total_results: data.length,
    page,
    total_pages: chunked.length,
  });
});

/**
 * @description NOTE: this route `/top_rated` needs to come before the `/:movieId`
 * so it doesn't fire the `/:movieId` route with the `req.params.movieId === 'top_rated'`
 */
movieRouter.get("/top_rated", async (req, res, next) => {
  const { page } = res.locals;
  const data = await getFileData(PATH_TO_ALL_MOVIES);
  const sorted = data.sort(
    (current, next) => next.vote_average - current.vote_average,
  );
  const chunked = chunk(sorted, ITEMS_PER_PAGE);

  const results = chunked[page - 1];

  res.status(200).json({
    results,
    total_results: sorted.length,
    page,
    total_pages: chunked.length,
  });
});

movieRouter.get("/most_popular", async (req, res, next) => {
  const { page } = res.locals;
  const data = await getFileData(PATH_TO_ALL_MOVIES);
  const filtered = data.filter((current) => current.most_popular);
  const chunked = chunk(filtered, ITEMS_PER_PAGE);

  res.status(200).json({
    results: chunked[page - 1],
    total_results: filtered.length,
    page,
    total_pages: chunked.length,
  });
});

movieRouter.get("/:movieId", async (req, res, next) => {
  const { movieId } = req.params;
  const data = await getFileData(PATH_TO_ALL_MOVIE_DETAILS);
  const found = data.find((current) => current.id.toString() === movieId);

  if (!found) {
    res.statusMessage = "Not found";
    res.status(404).json({ error: `Movie ID: ${movieId} - not found` });
    return;
  }

  res.status(200).json(found);
});

movieRouter.post(
  "/:movieId/rating",
  requireJSONContentType,
  async (req, res, next) => {
    const { movieId } = req.params;
    const { rating } = req.body;

    try {
      const updatedMovieDetails = await updateMovieRating(movieId, rating);

      res.status(200).json({ result: updatedMovieDetails });
    } catch (error) {
      res.statusMessage = error.message || "Failed to update rating";
      res
        .status(401)
        .json({ error: error.message || "Failed to update rating" });
    }
  },
);

movieRouter.delete("/:movieId", (req, res, next) => {
  const { movieId } = req.params;
  try {
    const deletedId = deleteMoviebyId(movieId);
    res.status(200).json({ result: deletedId });
  } catch (error) {
    res.statusMessage = error.message || "Failed to delete movie";
    res.status(401).json({ error: error.message || "Failed to delete movie" });
  }
});

module.exports = { movieRouter };
