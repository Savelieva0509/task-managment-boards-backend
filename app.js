const express = require("express");
const logger = require("morgan");
const cors = require("cors");
require("dotenv").config();

const boardsRouter = require("./routes/api/boards");
const tasksRouter = require("./routes/api/tasks");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/boards", boardsRouter);
app.use("/api/boards", tasksRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Server error" } = err;
  res.status(status).json({ message });
});

module.exports = app;
