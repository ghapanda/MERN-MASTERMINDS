const express = require("express");
const User = require("../models/User");
const router = express.Router();
const jwt = require("jsonwebtoken");
const secretKey = "your-secret-key";

router.post("/login", async (req, res) => {
  try {
    const { emailOrUsername, password } = req.body;
    const existingUser = await User.findOne({
      $or: [{ email: emailOrUsername }, { username: emailOrUsername }],
    });
    if (!existingUser) {
      return res.status(401).json({ message: "Wrong username or password" });
    }
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      return res.status(401).json({ error: "Authentication failed try Again" });
    }

    console.log("User logged in successfully");
    // if (existingUser.isAdmin) {
    //   //redirect to the admin page
    // } else {
    //   //redirect to the userpage
    // }
    res.status(200).json({
      email: existingUser.email,
      username: existingUser.username,
      isAdmin: existingUser.isAdmin,
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in, try again later" });
  }
});
module.exports = router;
