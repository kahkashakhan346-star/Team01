// server.js

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();

const port = 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.send("Server is running on port 3000");
});

// Start Server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});