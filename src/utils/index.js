const fs = require("fs/promises");
const path = require("path");

const blogPosts = require("../data/blog-posts.json");
const PATH_TO_ALL_BLOGPOSTS = path.resolve(
  __dirname,
  "..",
  "data",
  "blog-posts.json",
);

/**
 * @param {{delay?: number; error?: string}} params
 */
const wait = ({ delay = 800, error }) =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (error) {
        reject(new Error(error));
      } else resolve(null);
    }, delay);
  });

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

module.exports = {
  writeFile,
  getFileData,
  wait,
};
