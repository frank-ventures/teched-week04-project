import Database from "better-sqlite3";
const db = new Database("database.db");

// ----------------------
// Create the database and tables.
// ----------------------
db.exec(`
	CREATE TABLE IF NOT EXISTS platforms (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT
	)
`);

db.exec(`
	CREATE TABLE IF NOT EXISTS developers (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT
	)
`);

db.exec(`
	CREATE TABLE IF NOT EXISTS publishers (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT
	)
`);

db.exec(`
	CREATE TABLE IF NOT EXISTS genres (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT
	)
`);

db.exec(`
	CREATE TABLE IF NOT EXISTS games (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT,
        win_year INTEGER,
		imageUrl TEXT,
        platform_id INTEGER,
        developer_id INTEGER,
        publisher_id INTEGER,
        genre_id  INTEGER
	)
`);

db.exec(`
	CREATE TABLE IF NOT EXISTS comments (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		game_id INTEGER,
		username TEXT,
    comment TEXT,
		likes INTEGER
	)
`);

// ----------------------
// Put data into the Platforms table.
// ----------------------
const populatePlatforms = db.prepare(`
	INSERT INTO platforms (name) VALUES (?)
`);
populatePlatforms.run("PC");
populatePlatforms.run("Playstation 5");
populatePlatforms.run("Playstation 4");
populatePlatforms.run("Playstation 3");
populatePlatforms.run("Playstation 2");
populatePlatforms.run("Xbox Series X/S");
populatePlatforms.run("Xbox One");
populatePlatforms.run("Xbox 360");
populatePlatforms.run("Nintendo Switch");
populatePlatforms.run("Nintendo 64");
populatePlatforms.run("Game Boy");
populatePlatforms.run("Super NES");
populatePlatforms.run("Sega Mega Drive");

// ----------------------
// Put data into the Developers table.
// ----------------------
const populateDevelopers = db.prepare(`
	INSERT INTO developers (name) VALUES (?)
`);

populateDevelopers.run("Larian Studios");
populateDevelopers.run("FromSoftware");
populateDevelopers.run("Capcom");
populateDevelopers.run("Naughty Dog");
populateDevelopers.run("Epic Games");
populateDevelopers.run("Nintendo");
populateDevelopers.run("CD Projekt Red");
populateDevelopers.run("Rockstar North");
populateDevelopers.run("Bethesda Game Studios");
populateDevelopers.run("Valve");
populateDevelopers.run("Bioware");
populateDevelopers.run("Infinity Ward");
populateDevelopers.run("id Software");
populateDevelopers.run("DMA Design");
populateDevelopers.run("Sonic Team");
populateDevelopers.run("Park Place Productions");

// ----------------------
// Ended up not using this.
// ----------------------
const populatePublishers = db.prepare(`
	INSERT INTO publishers (name) VALUES (?)
`);

populatePublishers.run("testPub");

// ----------------------
// Put data into the Genres table.
// ----------------------
const populateGenres = db.prepare(`
	INSERT INTO genres (name) VALUES (?)
`);

populateGenres.run("Role-playing");
populateGenres.run("Action role-playing");
populateGenres.run("Survival horror");
populateGenres.run("Action adventure");
populateGenres.run("Battle royale");
populateGenres.run("Puzzle platformer");
populateGenres.run("First-person shooter");
populateGenres.run("Third-person shooter");
populateGenres.run("Platformer");
populateGenres.run("Fighting");
populateGenres.run("Sports");

// ----------------------
// Put data into the Games table
// ----------------------
const populateGames = db.prepare(`
	INSERT INTO games (name, win_year, imageUrl, platform_id, developer_id, publisher_id, genre_id) VALUES (?, ?, ?, ?, ?, ?, ?)
`);

populateGames.run(
  "Baldur's Gate 3",
  2023,
  "https://cdn2.steamgriddb.com/grid/a779abf92aeec12331d10524426171fb.png",
  2,
  1,
  1,
  1
);
populateGames.run(
  "Elden Ring",
  2022,
  "https://cdn2.steamgriddb.com/grid/7073e4df427844c68082181ff6c9c614.png",
  2,
  2,
  1,
  2
);
populateGames.run(
  "Resident Evil Village",
  2021,
  "https://cdn2.steamgriddb.com/grid/e5fc253b516e9f667591a666f74e3c47.png",
  2,
  3,
  1,
  3
);
populateGames.run(
  "The Last Of Us Part II",
  2020,
  "https://cdn2.steamgriddb.com/grid/0280227ae50ec8b710d8443292af95e3.png",
  3,
  4,
  1,
  4
);
populateGames.run(
  "Resident Evil 2",
  2019,
  "https://cdn2.steamgriddb.com/grid/9d69013d273225e88d4982d2b654c40b.png",
  3,
  3,
  1,
  3
);
populateGames.run(
  "Fortnite Battle Royale",
  2018,
  "https://cdn2.steamgriddb.com/grid/dfd22599626e624c9d249420c5a24ef8.png",
  1,
  5,
  1,
  5
);
populateGames.run(
  "The Legend of Zelda: Breath of the Wild",
  2017,
  "https://cdn2.steamgriddb.com/grid/9c8c52b4de99f8719502b11860876766.png",
  9,
  6,
  1,
  4
);
populateGames.run(
  "Dark Souls III",
  2016,
  "https://cdn2.steamgriddb.com/grid/522619cfa84a261309d5c92ec5c90348.png",
  3,
  2,
  1,
  2
);
populateGames.run(
  "The Witcher 3: Wild Hunt",
  2015,
  "https://cdn2.steamgriddb.com/grid/4f3180d44a5129c9fdaa8481c29c8ee9.png",
  3,
  7,
  1,
  4
);
populateGames.run(
  "Dark Souls II",
  2014,
  "https://cdn2.steamgriddb.com/grid/54ecdba055b9aab1c1f42aede76ca124.png",
  4,
  2,
  1,
  2
);
populateGames.run(
  "Grand Theft Auto V",
  2013,
  "https://cdn2.steamgriddb.com/grid/f55e1a9eb1d77edc48e70be422dcbc84.png",
  4,
  8,
  1,
  4
);
populateGames.run(
  "The Elder Scrolls V: Skyrim",
  2012,
  "https://cdn2.steamgriddb.com/grid/251dbb5e528421776ff6e17c87be507f.png",
  1,
  9,
  1,
  2
);
populateGames.run(
  "Portal 2",
  2011,
  "https://cdn2.steamgriddb.com/grid/bfc76c5e0d030bc7a628b105d32b85b5.png",
  1,
  10,
  1,
  6
);
populateGames.run(
  "Mass Effect 2",
  2010,
  "https://cdn2.steamgriddb.com/grid/ce8839a5ecda19985f2dc1129646bee7.png",
  1,
  11,
  1,
  2
);
populateGames.run(
  "Fallout 3",
  2009,
  "https://cdn2.steamgriddb.com/grid/586526ee16f5c5a3e80e27144976fec7.png",
  1,
  9,
  1,
  2
);
populateGames.run(
  "Call of Duty: Modern Warfare",
  2008,
  "https://cdn2.steamgriddb.com/grid/db17bc578c383f5bb0cb9be70c42331c.png",
  4,
  12,
  1,
  7
);
populateGames.run(
  "Gears of War",
  2007,
  "https://cdn2.steamgriddb.com/grid/80b3bba53c13751a2fafbc8f107ceef0.png",
  8,
  5,
  1,
  8
);
populateGames.run(
  "The Elder Scrolls IV: Oblivion",
  2006,
  "https://cdn2.steamgriddb.com/grid/a38c30b2766c4353d929a8afe1f2e831.png",
  1,
  9,
  1,
  2
);
populateGames.run(
  "Grand Theft Auto: San Andreas",
  2005,
  "https://cdn2.steamgriddb.com/grid/90b8375d64d41c337c0cd41bb1700264.png",
  5,
  8,
  1,
  4
);
populateGames.run(
  "Doom 3",
  2004,
  "https://cdn2.steamgriddb.com/grid/d9c7ae65135a802a5bb1cd0e6598ab0b.jpg",
  1,
  13,
  1,
  7
);
populateGames.run(
  "Grand Theft Auto: Vice City",
  2003,
  "https://cdn2.steamgriddb.com/grid/3d7ca3bb0cad79bd26ecafed0bc105b4.png",
  5,
  8,
  1,
  4
);
populateGames.run(
  "Grand Theft Auto III",
  2002,
  "https://cdn2.steamgriddb.com/grid/c540a0d6513cb755d04bd01f97fb62b7.png",
  5,
  14,
  1,
  4
);
populateGames.run(
  "Super Mario 64",
  1997,
  "https://cdn2.steamgriddb.com/grid/1f95c3946dda53915b711a1822f853c3.png",
  10,
  6,
  1,
  9
);
populateGames.run(
  "The Legend of Zelda: Link's Awakening",
  1994,
  "https://cdn2.steamgriddb.com/grid/02f0d08f47b21c8d45947a75ea7ed396.png",
  11,
  6,
  1,
  9
);
populateGames.run(
  "Street Fighter II",
  1992,
  "https://cdn2.steamgriddb.com/grid/d0c8ce37fb6f6c8dd772b35658449008.png",
  12,
  3,
  1,
  10
);
populateGames.run(
  "Sonic the Hedgehog",
  1991,
  "https://cdn2.steamgriddb.com/grid/70709cf7315b45fad2ec982c74bfbaf7.png",
  13,
  15,
  1,
  9
);
populateGames.run(
  "John Madden Football",
  1990,
  "https://www.cardboardconnection.com/wp-content/uploads/2012/08/John-Madden-Football-1990-SNES.jpg",
  13,
  16,
  1,
  11
);

// ----------------------
// Put data into the Comments table.
// ----------------------
const populateComments = db.prepare(`
	INSERT INTO comments (game_id, username, comment, likes) VALUES (?, ?, ?, ?)
`);

populateComments.run(1, "Frank", "First Baulders comment baby!", 500);
populateComments.run(1, "Jeff", "Oh dang too late!!", 0);
populateComments.run(2, "Also Frank", "First Elden comment baby!", 500);
