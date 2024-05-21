const express = require("express");
const router = express.Router();
const User = require("../models/User"); // Assuming your User model
const bcrypt = require("bcrypt");

// Update user profile
router.post("/editprofile", async (req, res) => {
  try {
    const {
      userId,
      username,
      password,
      email,
      displayName,
      isAdmin,
      danceStyle,
      danceClip,
      portrait,
      bio,
    } = req.body;
    console.log("in new request", displayName);
    // Find user by ID and update
    const hashedPassword = await bcrypt.hash(password, 10);

    const updatedUser = await User.findByIdAndUpdate(
      userId,
      {
        username,
        password: hashedPassword,
        email,
        displayName,
        isAdmin,
        danceStyle,
        danceClip,
        portrait,
        bio,
      },
      { new: true }
    );

    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(updatedUser);
    console.log("EDITED:", updatedUser);
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
