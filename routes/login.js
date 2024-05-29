const express = require("express");
const User = require("../models/User");
const router = express.Router();
const bcrypt = require("bcrypt");

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
    // if (password != existingUser.password) {
    //   console.log("got u wrong pass");
    //   return res.status(401).json({ message: "Wrong username or password" });
    // }
    // FIX THIS
    console.log("user is", existingUser);
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      console.log("got u wrong pass");
      return res.status(401).json({ message: "Wrong username or password" });
    }

    // if (existingUser.isAdmin) {
    //   //redirect to the admin page
    // } else {
    //   //redirect to the userpage
    // }
    const token = jwt.sign(
      {
        userId: existingUser._id,
        email: existingUser.email,
        username: existingUser.username,
        isAdmin: existingUser.isAdmin,
      },
      secretKey,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      token,
      userId: existingUser._id,
      usremail: existingUser.email,
      username: existingUser.username,
      isAdmin: existingUser.isAdmin,
      danceStyle: existingUser.danceStyle,
      bio: existingUser.bio,
      displayName: existingUser.displayName,
      portrait: existingUser.portrait,
      danceClip: existingUser.danceClip,
      listSessions: existingUser.listSessions,
    });
  } catch (error) {
    res.status(500).json({ message: "Error logging in, try again later" });
  }
});
module.exports = router;
