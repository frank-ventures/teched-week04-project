// ----------------------
// Import the things!
// ----------------------
import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const db = new Database("database.db");
const app = express();

app.use(express.json());
// Allows the client to communicate with the server without being blocked.
app.use(cors());

// ----------------------
// Setup and initialise server.
// ----------------------
app.listen(8080, function () {
  console.log("App is running on 8080");
});
app.get("/", function (request, response) {
  console.log("Root route. Roude.");
  response.json("Hi mate");
});

// ----------------------
// Get information from Games database.
// ----------------------
app.get("/gamewinners", function (request, response) {
  console.log("Getting game winners.");
  const gameWinners = db.prepare("SELECT * FROM games").all();

  response.json(gameWinners);
});

// ----------------------
// Get information from Games database, joined with other table data.
// ----------------------
app.get("/gamewinnersjoined", function (request, response) {
  console.log("Getting game winners.");
  const joinedWinnerData = db
    .prepare(
      `
  SELECT
    games.id AS id,
    games.name AS name,
    games.win_year AS year,
    games.imageUrl AS image,
    platforms.name AS platform,
    developers.name AS developer,
    genres.name AS genre
  FROM games
  JOIN platforms ON games.platform_id = platforms.id
  JOIN developers ON games.developer_id = developers.id
  JOIN genres ON games.genre_id = genres.id
  `
    )
    .all();

  response.json(joinedWinnerData);
});

// ----------------------
// Get information from Comments database
// ----------------------
app.get("/comments", function (request, response) {
  console.log(request.query);
  console.log("Getting user comments.");
  const comments = db
    .prepare(`SELECT * FROM comments WHERE game_id = ${request.query.id}`)
    .all();
  console.log(comments);

  response.json(comments);
});

// ----------------------
// Post comments to database
// ----------------------
app.post("/comments", function (request, response) {
  console.log(request.body);
  response.json(request.body);
  console.log("Posting comments.");

  const insertNewComment = db.prepare(`
      INSERT INTO comments (game_id, username, comment) VALUES (?, ?, ?)
  `);

  insertNewComment.run(
    request.body.game_id,
    request.body.username,
    request.body.comment
  );
  if (err) {
    console.error(err.message);
    response.status(500).send("Error inserting comment");
  } else {
    response.send("Success");
  }
});
