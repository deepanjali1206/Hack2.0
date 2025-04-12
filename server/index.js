const express = require("express");
const app = express();

// Root route handler
app.get("/", (req, res) => {
  res.send("Welcome to the server!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
