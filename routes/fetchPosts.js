const express = require("express");
const router = express.Router();
const Post = require("../models/Posts");

// Route to fetch recent announcements
router.get("/fetchPosts", async (req, res) => {
  try {
    const announcements = await Post.find().sort({ createdAt: -1 }).limit(10); // Fetches 10 most recent announcements
    res.json(announcements);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
