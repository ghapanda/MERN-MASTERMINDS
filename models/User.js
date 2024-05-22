const mongoose = require("mongoose");
const schedule = require("./Schedule")

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  email: String,
  displayName: String,
  isAdmin: Boolean,
  danceStyle: String,
  danceClip: String, // Assuming you store the path or URL to the video
  portrait: String, // Assuming you store the path or URL to the image
  bio: String,
  listSessions: [{ type: mongoose.Schema.Types.ObjectId, ref: "schedule" }], // Assuming schedule is another model
});

module.exports = mongoose.model("User", userSchema); //User is the name of the model for the collection
