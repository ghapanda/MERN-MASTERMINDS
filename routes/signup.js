const express = require("express");
const router = express.Router();
const signupController = require("../controllers/signupController");

// Route to handle user signup
router.post("/signup", signupController.signup);

module.exports = router;
