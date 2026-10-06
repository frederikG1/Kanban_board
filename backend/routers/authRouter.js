import { Router } from "express";
import db from "../database/connection.js";
import bcrypt from "bcrypt";

const router = Router();
const saltRounds = 10;

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send({
      error: "Please fill in all fields",
    });
  }

  const existingUser = db
    .prepare("SELECET * FROM users WHERE email = ?")
    .get(email);

  if (existingUser) {
    return res.status(400).send({ error: "Email already in use" });
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  db.prepare(
    `INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)`,
  ).run(username, email, hashedPassword);

  res.status(201).send({ message: "User created!" });
});
