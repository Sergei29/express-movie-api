const express = require("express");

const { emitter, CREATE_BLOG } = require("../utils/emitter");

const indexRouter = express.Router();

/* GET home page. */
indexRouter.get("/", function (req, res, next) {
  res.json({ title: "Express" });
});

indexRouter.post("/new-blog", async (req, res, next) => {
  const { subject } = req.body;
  if (!subject) {
    res.statusMessage = "Missing payload";
    res.status(401).send("Missing payload { subject, callbackUrl }");
  }

  emitter.emit(CREATE_BLOG, subject);

  res.json({ received: subject, status: "processing" });
});
module.exports = { indexRouter };
