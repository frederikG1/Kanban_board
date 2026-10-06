import { DatabaseSync } from "node:sqlite";

const db = new DatabaseSync("database/users.db");

export default db;
