const express = require("express");
const User = require("../models/User");
const router = express.Router();

// Route to fetch user information based on search query
router.get("/search", async (req, res) => {
  console.log('Testing...')
    try {
      // Extract the search query from the request URL
      const { q } = req.query;
  
      // Define a regex pattern to match the search query
      const regex = new RegExp(q, "i"); // Case-insensitive search
  
      // Query the database to find users matching the search query
      const users = await User.find({
        $or: [
          { displayName: { $regex: regex } },
          { username: { $regex: regex } },
        ],
      }, "displayName username portrait");

      console.log('We have populated users')

    } catch (error) {
      // Handle errors
      console.error("Error searching users:", error);
      res.status(500).json({ error: "Server error" });
    }
  });
  
  module.exports = router;

  