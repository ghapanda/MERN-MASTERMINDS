const express = require("express");
const User = require("../models/User");
const router = express.Router();
router.post("/login", async (req, res) => {
  try {
    const { emailOrUsername, password } = req.body;
    const existingUser = await User.findOne({
      $or: [
        { email: emailOrUsername, password: password },
        { username: emailOrUsername, password: password },
      ],
    });
    if (!existingUser) {
      return res.status(404).json({ message: "Wrong username or password" });
    }
    console.log("User logged in successfully");
    // if (existingUser.isAdmin) {
    //   //redirect to the admin page
    // } else {
    //   //redirect to the userpage
    // }
    res
      .status(200)
      .json({
        email: existingUser.email,
        username: existingUser.username,
        isAdmin: existingUser.isAdmin,
      });
  } catch (error) {
    res.status(500).json({ message: "Error logging in, try again later" });
  }
});
module.exports = router;
