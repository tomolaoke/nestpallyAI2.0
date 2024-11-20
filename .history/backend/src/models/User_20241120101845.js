const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  gender: { type: String, required: true },
  location: { type: String, required: true },
  budget: { type: Number, required: true },
  preferences: { type: Array, required: true }, // [cleanliness, introvert/extrovert scale, etc.]
});

module.exports = mongoose.model('User', UserSchema);
