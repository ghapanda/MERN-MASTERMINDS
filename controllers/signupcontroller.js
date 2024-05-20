const User = require("../models/User");
const bcrypt = require("bcrypt");

exports.signup = async (req, res) => {
  console.log(req.body);
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
      listSessions,
    } = req.body;

    //check if the user already exists:
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new user instance
    const newUser = new User({
      username,
      password: hashedPassword,
      email,
      displayName,
      isAdmin,
      danceStyle,
      danceClip,
      portrait,
      bio,
      listSessions, // Initialize listSessions as an empty array
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    res.status(201).json(savedUser); // Respond with the saved user object
  } catch (error) {
    console.error("Error signing up user:", error);
    res.status(500).json({ message: "Error signing up user" });
  }
};
