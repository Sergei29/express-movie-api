const express = require("express");
const searchRouter = express.Router();

searchRouter.get("/", function (req, res, next) {
  res.status(200).json({ message: "OK" });
});

module.exports = { searchRouter };
