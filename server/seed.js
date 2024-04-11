import Database from "better-sqlite3";
const db = new Database("database.db");

// Create the databases
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
        genre_id  INTEGER,
        comments_id INTEGER
	)
`);

db.exec(`
	CREATE TABLE IF NOT EXISTS comments (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT,
        message TEXT,
		likes INTEGER
	)
`);

// Put data into the Platforms table
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

// Put data into the Developers table
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
populateDevelopers.run("Infinity Ward");
populateDevelopers.run("id Software");
populateDevelopers.run("DMA Design");
populateDevelopers.run("Sonic Team");
populateDevelopers.run("Ocean Software");

// Put data into the Genres table
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
populateGenres.run("Side-scroller");

// Put data into the Games table
const populateGames = db.prepare(`
	INSERT INTO games (name, win_year, imageUrl, platform_id, developer_id, publisher_id, genre_id, comments_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?)
`);

populateGames.run("Baldur's Gate 3", 2023, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run("Elden Ring", 2022, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run(
  "Resident Evil Village",
  2021,
  "something.jpg",
  1,
  1,
  1,
  1,
  1
);
populateGames.run(
  "The Last Of Us Part II",
  2020,
  "something.jpg",
  1,
  1,
  1,
  1,
  1
);
populateGames.run("Resident Evil 2", 2019, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run(
  "Fortnite Battle Royale",
  2018,
  "something.jpg",
  1,
  1,
  1,
  1,
  1
);
populateGames.run(
  "The Legend of Zelda: Breath of the Wild",
  2017,
  "something.jpg",
  1,
  1,
  1,
  1,
  1
);
populateGames.run("Dark Souls III", 2016, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run(
  "The Witcher 3: Wild Hunt",
  2015,
  "something.jpg",
  1,
  1,
  1,
  1,
  1
);
populateGames.run("Dark Souls II", 2014, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run("Grand Theft Auto V", 2013, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run(
  "The Elder Scrolls V: Skyrim",
  2012,
  "something.jpg",
  1,
  1,
  1,
  1,
  1
);
populateGames.run("Portal 2", 2011, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run("Mass Effect 2", 2010, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run("Fallout 3", 2009, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run(
  "Call of Duty: Modern Warfare",
  2008,
  "something.jpg",
  1,
  1,
  1,
  1,
  1
);
populateGames.run("Gears of War", 2007, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run(
  "The Elder Scrolls IV: Oblivion",
  2006,
  "something.jpg",
  1,
  1,
  1,
  1,
  1
);
populateGames.run(
  "Grand Theft Auto: San Andreas",
  2005,
  "something.jpg",
  1,
  1,
  1,
  1,
  1
);
populateGames.run("Doom 3", 2004, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run(
  "Grand Theft Auto: Vice City",
  2003,
  "something.jpg",
  1,
  1,
  1,
  1,
  1
);
populateGames.run("Grand Theft Auto III", 2002, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run("Super Mario 64", 1997, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run(
  "The Legend of Zelda: Link's Awakening",
  1994,
  "something.jpg",
  1,
  1,
  1,
  1,
  1
);
populateGames.run("Street Fighter II", 1992, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run("Sonic the Hedgehog", 1991, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run("John Madden Football", 1990, "something.jpg", 1, 1, 1, 1, 1);
populateGames.run("The Untouchables", 1989, "something.jpg", 1, 1, 1, 1, 1);

// Put data into the Comments table
const populateComments = db.prepare(`
	INSERT INTO comments (name, message, likes) VALUES (?, ?, ?)
`);

populateComments.run("Frank", "First baby!", 500);
