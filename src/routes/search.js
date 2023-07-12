const express = require("express");
const { verifyApiKey, getPageNumber } = require("../middleware");

const searchRouter = express.Router();

searchRouter.use(verifyApiKey, getPageNumber);

searchRouter.get("/", function (req, res, next) {
  res.status(200).json({ message: "OK" });
});

module.exports = { searchRouter };
