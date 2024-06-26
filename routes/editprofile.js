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
    const sentData = {
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
      listSessions: updatedUser.listSessions,
    };
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.status(200).json(sentData);
  } catch (err) {
    console.error("Error updating profile:", err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
