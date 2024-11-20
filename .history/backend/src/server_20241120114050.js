const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config(); // Load environment variables

const app = express(); // Initialize Express app

// Middleware
app.use(cors()); // Enable Cross-Origin Resource Sharing
app.use(express.json()); // Parse JSON requests

// MongoDB Connection
const MONGO_URI = process.env.MONGO_URI;  // Make sure you're getting MONGO_URI from environment variables

mongoose
  .connect(MONGO_URI)
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Routes
app.use('/api/users', require('./routes/userRoutes'));
app.use('/api/match', require('./routes/matchRoutes'));

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
