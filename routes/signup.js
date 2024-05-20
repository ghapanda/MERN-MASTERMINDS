const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signupController");

// Route to handle user signup
router.post("/signup", signupController.signup);
router.get("/signup", (req, res) => {
  res.send("what is happening!");
});

module.exports = router;
