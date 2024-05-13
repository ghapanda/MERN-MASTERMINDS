const User = require("../models/User");

exports.signup = async (req, res) => {
  try {
    const {
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

    // Create a new user instance
    const newUser = new User({
      username,
      password,
      email,
      displayName,
      isAdmin,
      danceStyle,
      danceClip,
      portrait,
      bio,
      listSessions: [], // Initialize listSessions as an empty array
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Respond with the saved user object
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ message: "Error signing up user" });
  }
};
