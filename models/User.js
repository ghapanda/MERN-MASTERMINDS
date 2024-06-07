const mongoose = require("mongoose");
const schedule = require("./Schedule");

const userSchema = new mongoose.Schema({
  // _id: mongoose.Schema.Types.ObjectId,
  username: String,
  password: String,
  email: String,
  displayName: String,
  isAdmin: Boolean,
  danceStyle: String,
  danceClip: String, // Assuming you store the path or URL to the video
  portrait: String, // Assuming you store the path or URL to the image
  bio: String,
  listSessions: [
    {
      type: [String],
      validate: {
        validator: function(v) {
          // Ensure each sub-array has exactly 3 strings
          return v.every(subArray => subArray.length === 4);
        },
        message: props => `${props.value} does not have exactly 3 elements!`
      }
    }
  ], // Assuming schedule is another model
});

module.exports = mongoose.model("User", userSchema); //User is the name of the model for the collection
