const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true, // Assuming email addresses should be unique
  },
  movies: {
    type: Array,
    default: [],
  },
  token: {
    type: String,
  },
});

module.exports = mongoose.model("User", userSchema);
