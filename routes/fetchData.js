const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");
router.post("/fetchData", async (req, res) => {
  const userId = req.body.userId; // Since we're sending plain text, req.body contains the text directly
  try {
    const user = await User.findById(userId); // Find the user by userId
    if (user) {
      const sentData = {
        userId,
        username: user.username,
        password: req.body.password,
        email: user.email,
        displayName: user.displayName,
        isAdmin: user.isAdmin,
        danceStyle: user.danceStyle,
        danceClip: user.danceClip,
        portrait: user.portrait,
        bio: user.bio,
        listSessions: user.listSessions,
      };
      res.status(200).json(sentData);
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    console.log("Error fetching user:", error);
    res.status(500).json({ message: "Internal server error" });
  }
});
module.exports = router;
