const express = require("express");
const router = express.Router();
const updateScheduleController = require("../controllers/updateScheduleController");
const Session = require("../models/Schedule");

// Route to handle user signup
router.post("/update", updateScheduleController.update);
router.post("/delete", updateScheduleController.delete);
router.post("/addAttendant", updateScheduleController.addAttendant);
router.post("/addSession", updateScheduleController.addSession);
router.get("/", async (req, res) => {
  try {
    const sessions = await Session.find();
    res.json(sessions);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
 
module.exports = router;
