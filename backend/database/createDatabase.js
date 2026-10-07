import db from "./connection.js";

const deleteMode = process.argv.includes("--delete");

if (deleteMode) {
  db.exec(`DROP TABLE IF EXISTS users`);
}

db.exec(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    email TEXT NOT NULL UNIQUE,
    password_hash TEXT NOT NULL
    )`);

console.log("DB Setup complete");
