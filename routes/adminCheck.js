const express = require("express");
const User = require("../models/User");
const router = express.Router();
const ADMIN_PASSWORD = "mernadmin";
router.post("/adminCheck", async (req, res) => {
  try {
    if (req.body.adminPassword === ADMIN_PASSWORD) {
      const userId = req.body.userId;
      const adminUser = await User.findByIdAndUpdate(
        userId,
        { isAdmin: true },
        { new: true }
      );

      if (!adminUser) {
        return res.status(404).json({ message: "User not found" });
      }

      res.status(200).json({ isAdmin: adminUser.isAdmin });
    } else {
      console.log("wrong admin pass");
      res.status(401).json({ message: "Wrong Admin Password" });
    }
  } catch (error) {
    console.error("Error updating user as admin:", error);
    res.status(500).json({ message: "Server error" });
  }
});
module.exports = router;
