const fs = require("fs/promises");
const path = require("path");

const PATH_TO_ALL_MOVIES = path.resolve(__dirname, "..", "data", "movies.json");
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
    throw new Error(`Failed to write ${filename}: ${error.toString()}`);
  }
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
    throw new Error("Not valid payload");
  }

  const allMovieDetails = await getFileData(PATH_TO_ALL_MOVIE_DETAILS);
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

  const newVoteCount = foundMovieDetails.vote_count + rating;

  const updatedMovieDetails = {
    ...foundMovieDetails,
    vote_count: newVoteCount,
  };

  const updatedMovie = {
    ...foundMovie,
    vote_count: newVoteCount,
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
  const allMovieDetails = await getFileData(PATH_TO_ALL_MOVIE_DETAILS);
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

module.exports = { writeFile, getFileData, updateMovieRating, deleteMoviebyId };
