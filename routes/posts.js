const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

// Route to post a new announcement
router.post("/posts", async (req, res) => {
  try {
    const { author, message } = req.body;
    const post = new Post({
      author,
      message,
    });
    await post.save();
    res.status(201).json({ message: "Announcement added successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Server error" });
  }
});

module.exports = router;
