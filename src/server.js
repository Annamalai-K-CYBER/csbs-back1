// server.js
const express = require("express");
const app = express();

// Root route
app.get("/", (req, res) => {
  res.send("🚀 Express server running successfully on Vercel!");
});

// Example API route
app.get("/api/data", (req, res) => {
  res.json({
    message: "Hello from Express on Vercel!",
    date: new Date().toISOString(),
    items: ["apple", "banana", "cherry"],
  });
});

// Export for Vercel
module.exports = app;

// Local development
if (require.main === module) {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
}