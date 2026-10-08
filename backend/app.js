import express from "express";
import cors from "cors";
import session from "express-session";
import "dotenv/config" 

const app = express();
app.use(express.json());

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  }),
);

app.use(
  session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false },
  }),
);

app.get("/", (req, res) => {
  res.send("Hello Kanban Board!");
});

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`App is running on port ${PORT}`);
});

// ---------- AUTH ----------
import authRouther from "./routers/authRouter.js";
app.use("/api", authRouther);
