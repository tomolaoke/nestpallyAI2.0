const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const dbConnect = require('./utils/dbConnect');
const userRoutes = require('./routes/userRoutes');
const matchRoutes = require('./routes/matchRoutes');

// Load environment variables from .env file
dotenv.config();

// Initialize Express app
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Database connection
dbConnect().then(() => console.log('Connected to MongoDB')).catch(console.error);

// Routes
app.use('/api/users', userRoutes);
app.use('/api/match', matchRoutes);

// Port configuration
const PORT = process.env.PORT || 5000;

// Start the server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
