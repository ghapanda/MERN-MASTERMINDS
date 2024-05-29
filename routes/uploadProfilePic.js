//update profilePicture
const express = require("express");
const multer = require("multer");
const path = require("path");
const User = require("../models/User"); // Adjust path as necessary
const router = express.Router();
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve(__dirname, "../client/public/uploads/"));
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

router.post(
  "/uploadProfilePicture",
  upload.single("profilePicture"),
  async (req, res) => {
    try {
      const { userId } = req.body;
      const profilePicturePath = req.file.path;

      // Update user's profile picture in the database
      const user = await User.findByIdAndUpdate(
        userId,
        { portrait: profilePicturePath },
        { new: true }
      );

      if (!user) {
        return res.status(404).send("User not found");
      }
      const sentData = {
        userId,
        username: user.username,
        password: user.password,
        email: user.email,
        displayName: user.displayName,
        isAdmin: user.isAdmin,
        danceStyle: user.danceStyle,
        danceClip: user.danceClip,
        portrait: user.portrait,
        bio: user.bio,
        listSessions: user.listSessions,
      };
      console.log("sent data PROFILE is ", sentData);
      res.status(200).json(sentData);
    } catch (error) {
      console.error("Error updating profile picture:", error);
      res.status(500).send("Internal Server Error");
    }
  }
);
module.exports = router;
