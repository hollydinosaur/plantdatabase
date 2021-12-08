const express = require("express");
const app = express();
const apiRouter = require("./routers/api-router");

app.use(express.json());

// app.use("/api", apiRouter);
app.get("/", (req, res) => res.send("Hello World!"));

module.exports = app;
