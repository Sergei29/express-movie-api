const fs = require("fs/promises");
const path = require("path");

const actors = require("../data/people.json");
const movieDetails = require("../data/movieDetails.json");
const movies = require("../data/movies.json");

const PATH_TO_ALL_MOVIES = path.resolve(__dirname, "..", "data", "movies.json");
const PATH_TO_ALL_ACTORS = path.resolve(__dirname, "..", "data", "people.json");
const PATH_TO_ALL_MOVIE_DETAILS = path.resolve(
  __dirname,
  "..",
  "data",
  "movieDetails.json",
);

/**
 * @description reads .json file data, returns parsed object/array
 * @param { string } pathToFile
 * @returns {Promise<unknown>}
 */
const getFileData = async (pathToFile) => {
  try {
    const dataJson = await fs.readFile(pathToFile, { encoding: "utf-8" });
    return JSON.parse(dataJson);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : `Failed to read file at ${pathToFile}`;
    throw new Error(message);
  }
};

/**
 * @description writes data to .json file
 * @param { Object|Array } data any serializeable data
 * @param { string } pathToFile path to file name must include `.json` as extension
 */
const writeFile = async (data, pathToFile) => {
  try {
    await fs.writeFile(pathToFile, JSON.stringify(data));
  } catch (error) {
    throw new Error(`Failed to write ${pathToFile}: ${error.toString()}`);
  }
};

/**
 * @param {number} currentRate
 * @param {number} totalVotes
 * @param {number} newRate
 * @returns {number} new current rate
 */
const calculateAverage = (currentRate, totalVotes, newRate) => {
  const newFloadRate = (currentRate * totalVotes + newRate) / (totalVotes + 1);
  if (newFloadRate > 10) return 10;
  if (newFloadRate < 0.5) return 0.5;

  return parseFloat(newFloadRate.toPrecision(5), 10);
};

/**
 * @description updated movie summary and details with new rating
 * @param { string } movieId
 * @param { string|number } rating
 * @returns {Promise<Object>} updated movie details
 */
const updateMovieRating = async (movieId, rating) => {
  if (isNaN(+movieId)) {
    throw new Error("Not valid movie ID. Must be numeric.");
  }
  if (typeof rating !== "number") {
    throw new Error(
      "Not valid rating payload: must be a number between 0.5 and 10",
    );
  }
  if (rating < 0.5 || rating > 10) {
    throw new Error("Not valid rating: must be a number between 0.5 and 10");
  }

  /**
   * @type {typeof movieDetails}
   */
  const allMovieDetails = await getFileData(PATH_TO_ALL_MOVIE_DETAILS);
  /**
   * @type {typeof movies}
   */
  const allMovies = await getFileData(PATH_TO_ALL_MOVIES);

  const foundMovieDetails = allMovieDetails.find(
    (current) => current.id.toString() === movieId,
  );

  const foundMovie = allMovies.find(
    (current) => current.id.toString() === movieId,
  );

  if (!foundMovie || !foundMovieDetails) {
    throw new Error(`Movie ID: ${movieId} - not found`);
  }

  const newVoteAverage = calculateAverage(
    foundMovieDetails.vote_average,
    foundMovieDetails.vote_count,
    rating,
  );

  const updatedMovieDetails = {
    ...foundMovieDetails,
    vote_average: newVoteAverage,
  };

  const updatedMovie = {
    ...foundMovie,
    vote_average: newVoteAverage,
  };

  const newAllMovies = allMovies.map((current) =>
    current.id === updatedMovie.id ? updatedMovie : current,
  );
  const newAllMovieDetails = allMovieDetails.map((current) =>
    current.id === updatedMovieDetails.id ? updatedMovieDetails : current,
  );

  await writeFile(newAllMovies, PATH_TO_ALL_MOVIES);
  await writeFile(newAllMovieDetails, PATH_TO_ALL_MOVIE_DETAILS);

  return updatedMovieDetails;
};

/**
 * @description deletes movie by ID
 * @param { string } movieId
 * @param { string|number } rating
 * @returns {Promise<string>} movie ID
 */
const deleteMoviebyId = async (movieId) => {
  if (isNaN(+movieId)) {
    throw new Error("Not valid movie ID. Must be numeric.");
  }
  /**
   * @type {typeof movieDetails}
   */
  const allMovieDetails = await getFileData(PATH_TO_ALL_MOVIE_DETAILS);
  /**
   * @type {typeof movies}
   */
  const allMovies = await getFileData(PATH_TO_ALL_MOVIES);

  const foundMovieDetails = allMovieDetails.find(
    (current) => current.id.toString() === movieId,
  );

  const foundMovie = allMovies.find(
    (current) => current.id.toString() === movieId,
  );

  if (!foundMovie || !foundMovieDetails) {
    throw new Error(`Movie ID: ${movieId} - not found`);
  }

  const newAllMovies = allMovies.filter(
    (current) => current.id.toString() !== movieId,
  );
  const newAllMovieDetails = allMovieDetails.filter(
    (current) => current.id !== movieId,
  );

  await writeFile(newAllMovies, PATH_TO_ALL_MOVIES);
  await writeFile(newAllMovieDetails, PATH_TO_ALL_MOVIE_DETAILS);

  return movieId;
};

/**
 * @param {string} actorName
 */
const findActorsByName = async (actorName) => {
  /**
   * @type {typeof actors}
   */
  const allActors = await getFileData(PATH_TO_ALL_ACTORS);
  const foundActors = allActors.filter((current) =>
    current.name.toLowerCase().includes(actorName.toLowerCase()),
  );

  return foundActors;
};

/**
 * @param {string} movieQuery
 */
const findMoviesByQuery = async (movieQuery) => {
  /**
   * @type {typeof movies}
   */
  const allMovies = await getFileData(PATH_TO_ALL_MOVIES);

  return allMovies.filter(
    ({ title, original_title = "", overview = "" }) =>
      title.toLowerCase().includes(movieQuery.toLowerCase()) ||
      original_title?.toLowerCase().includes(movieQuery.toLowerCase()) ||
      overview.toLowerCase().includes(movieQuery.toLowerCase()),
  );
};

module.exports = {
  writeFile,
  getFileData,
  updateMovieRating,
  deleteMoviebyId,
  findMoviesByQuery,
  findActorsByName,
};
