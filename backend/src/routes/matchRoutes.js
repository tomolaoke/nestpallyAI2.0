const express = require('express');
const User = require('../models/User');
const router = express.Router();

// AI Matching Logic
const calculateCompatibility = (user1, user2) => {
  const dotProduct = user1.preferences.reduce((acc, value, index) => acc + value * user2.preferences[index], 0);
  const magnitude1 = Math.sqrt(user1.preferences.reduce((acc, value) => acc + value ** 2, 0));
  const magnitude2 = Math.sqrt(user2.preferences.reduce((acc, value) => acc + value ** 2, 0));
  return dotProduct / (magnitude1 * magnitude2);
};

// Find matches
router.post('/', async (req, res) => {
  const { userId } = req.body;

  try {
    const currentUser = await User.findById(userId);
    const allUsers = await User.find({ _id: { $ne: userId } });

    const matches = allUsers
      .map((user) => ({
        user,
        compatibility: calculateCompatibility(currentUser, user),
      }))
      .sort((a, b) => b.compatibility - a.compatibility)
      .slice(0, 5);

    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
