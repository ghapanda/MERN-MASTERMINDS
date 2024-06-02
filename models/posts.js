const mongoose = require("mongoose");

const newsSchema = new mongoose.Schema(
  {
    author: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true, // Adds createdAt and updatedAt fields
  }
);

const Posts = mongoose.model("Posts", newsSchema);

module.exports = Posts;
