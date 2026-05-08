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

