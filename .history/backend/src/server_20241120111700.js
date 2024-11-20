const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express(); // Initialize Express app

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON requests

// Routes
app.use('/api/users', require('./routes/userRoutes')); // User-related routes
app.use('/api/match', require('./routes/matchRoutes')); // Match-related routes

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB
