const express = require("express");
const router = express.Router();
const User = require("../models/user");

// * FETCH USER BY EMAIL OR GET ALL USERS

router.get("/", async (req, res) => {
  const { email } = req.query;

  const user = await User.find(email ? { email } : {});
  return res.json(user);
});

// TODO: CREATE USER

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: DELETE USER BY EMAIL

router.delete("/", async (req, res) => {
  try {
    const email = req.query.email;

    const user = await User.findOneAndDelete({ email });

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

// TODO: UPDATE USER BY EMAIL

router.patch("/", async (req, res) => {
  try {
    const email = req.query.email;
    const update = req.body;

    const user = await User.findOneAndUpdate({ email }, update);

    if (!user) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(update);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
