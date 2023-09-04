const express = require("express");
const User = require("../models/user");
const app = express();
const router = express.Router();
const jwt = require("jsonwebtoken");

router.post("/", async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      res.status(400).json({
        message: "Please provide email and password",
      });
      return; // Add this return statement to exit the function
    }

    const user = await User.findOne({ email: email });

    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
      return; // Add this return statement to exit the function
    }

    const token = jwt.sign(
      { user_id: user._id, email },
      process.env.JWT_SECRET,
      {
        expiresIn: "30s",
      }
    );

    user.token = token;

    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: "Internal server error",
    });
  }
});

module.exports = router;
