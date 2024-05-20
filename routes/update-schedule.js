const express = require("express");
const router = express.Router();
const updateScheduleController = require("../controllers/updateScheduleController");
const Session = require("../models/Schedule");

// Route to handle user signup
router.post("/update-schedule", updateScheduleController.update);
router.get("/update-schedule", async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
