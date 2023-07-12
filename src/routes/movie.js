const express = require("express");
const movieRouter = express.Router();

movieRouter.get("/", function (req, res, next) {
  res.status(200).json({ message: "OK" });
});

module.exports = { movieRouter };
