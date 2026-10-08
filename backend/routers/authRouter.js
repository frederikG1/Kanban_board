import { Router } from "express";
import db from "../database/connection.js";
import bcrypt from "bcrypt";

const router = Router();
const saltRounds = 10;

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).send({
      errorMessage: "Please fill in all fields",
    });
  }

  const existingUser = db
    .prepare(`SELECT * FROM users WHERE email = ?`)
    .get(email);

  if (existingUser) {
    return res.status(400).send({ errorMessage: "Email already in use" });
  }

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  db.prepare(
    `INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)`,
  ).run(username, email, hashedPassword);

  res.status(201).send({ successMessage: "User created!" });
});

router.post("/login", async (req, res) => {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).send({
      errorMessage: "Please enter username and password",
    });
  }

  const foundUser = db
    .prepare(`SELECT * FROM users WHERE username = ?`)
    .get(username);

  if (!foundUser) {
    return res.status(400).send({
      errorMessage: "User not found",
    });
  }

  const isPasswordCorrect = await bcrypt.compare(
    password,
    foundUser.password_hash,
  );

  if (!isPasswordCorrect) {
    return res.status(400).send({
      errorMessage: "Wrong password",
    });
  }

  req.session.user = {
    id: foundUser.id,
    username: foundUser.username,
  };

  res.status(200).send({ successMessage: "Login succesful"});
});

export default router;
