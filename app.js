const express = require("express");
const app = express();
const {
  models: { Movie, Actor },
} = require("./db");

module.exports = app;

app.get("/", (req, res) => {
  res.send(
    `<html>
    <body>The Acme Movie API</body>
    </html`
  );
});

app.get("/api/movies", async (req, res, next) => {
  try {
    const movies = await Movie.findAll();
    res.status(200).send(movies);
  } catch (ex) {
    next(ex);
  }
});

app.get("/api/actors", async (req, res, next) => {
  try {
    const actors = await Actor.findAll();
    res.status(200).send(actors);
  } catch (ex) {
    next(ex);
  }
});
