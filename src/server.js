// api/server.js
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("🚀 Express server running on Vercel!");
});

app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from Express!",
    time: new Date().toISOString(),
    items: ["apple", "banana", "orange"],
  });
});

module.exports = app;