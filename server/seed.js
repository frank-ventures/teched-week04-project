import Database from "better-sqlite3";
const db = new Database("database.db");

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
        platform_id INTEGER,
        developer_id INTEGER,
        publisher_id INTEGER,
        genres_id  INTEGER,
        comments_id INTEGER
	)
`);

db.exec(`
	CREATE TABLE IF NOT EXISTS comments (
		id INTEGER PRIMARY KEY AUTOINCREMENT,
		name TEXT,
        message TEXT
	)
`);
