import { Router } from "express";
import db from "../database/connection.js";

const router = Router();

router.get("/boards", (req, res) => {
  const boards = db.prepare("SELECT * FROM boards").all();

  res.status(200).send(boards);
});

router.get("/columns", (req, res) => {

  const columns = db.prepare("SELECT * FROM columns").all();
  
  res.status(200).send(columns);
});
