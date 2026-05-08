// server.js

const express = require("express");
const jwt = require("jsonwebtoken");
const cors = require("cors");
const { MongoClient } = require("mongodb");

const app = express();


// MongoDB URI
const mongoUri = "mongodb://localhost:27017";

// Create Mongo Client
const client = new MongoClient(mongoUri);

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB before starting server
async function startServer() {
  try {
    await client.connect();
    console.log("MongoDB connected successfully");

    // Test Route
    app.get("/", (req, res) => {
      res.send("Server is running on port 3000");
    });

    // Categories Route
    app.get("/categories", async (req, res) => {
      const data = await client.db("Team01Db").collection("category").find().toArray();
      res.send(data);
    });

    // Start Server
    app.listen(3000, () => {
      console.log(`Server running on port 3000`);
    });
  } catch (error) {
    console.error("MongoDB connection failed:", error);
  }
}

startServer();