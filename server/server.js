import express from "express";
import cors from "cors";
import Database from "better-sqlite3";

const db = new Database("database.db");
const app = express();

app.use(express.json());
app.use(cors()); // allows the client to communicate with the server without being blocked

// Setup and initialise server
app.listen(8080, function () {
  console.log("App is running on 8080");
});
app.get("/", function (request, response) {
  console.log("Root route. Roude.");
  response.json("Hi mate");
});

// Get information from database
// Games
app.get("/gamewinners", function (request, response) {
  console.log("Getting game winners.");
  const gameWinners = db.prepare("SELECT * FROM games").all();

  response.json(gameWinners);
});
// Comments
app.get("/comments", function (request, response) {
  console.log("Getting user comments.");
  response.json("Hi comments");
});

// Post comments to database
app.post("/comments", function (request, response) {
  console.log("Posting comments.");
  response.json("Posting comments");
});
