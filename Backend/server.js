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

// MongoDB Connection URL
const uri = "mongodb://127.0.0.1:27017";

// Create Mongo Client
const client = new MongoClient(uri);

// Connect MongoDB and Start Server
async function startServer() {
  try {
    // Connect MongoDB
    await client.connect();

    console.log("Connected to MongoDB");

    // Database
    const db = client.db("Team01Db");

    // Collection
    const studentsCollection = db.collection("Students");

    // Home Route
    app.get("/", (req, res) => {
      res.send("Server is running on port 3000");
    });

    // GET All Students API
    app.get("/students", async (req, res) => {
      try {
        // Fetch all students from MongoDB
        const students = await studentsCollection.find({}).toArray();

        // Send students data
        res.status(200).json(students);

      } catch (error) {
        res.status(500).json({
          success: false,
          message: error.message,
        });
      }
    });

    // Start Server
    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });

  } catch (error) {
    console.error(error);
  }
}

// Run Server
startServer();