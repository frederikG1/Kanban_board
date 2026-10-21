import { Router } from "express";
import db from "../database/connection.js";
import { isLoggedIn } from "./middlewareRouter.js";

const router = Router();

router.get("/boards", isLoggedIn, (req, res) => {
  const boards = db
    .prepare("SELECT * FROM boards WHERE owner_id = ?")
    .all(req.session.user.id);
  res.status(200).send(boards);
});

router.get("/columns", (req, res) => {
  const columns = db.prepare("SELECT * FROM columns").all();

  res.status(200).send(columns);
});

export default router;
