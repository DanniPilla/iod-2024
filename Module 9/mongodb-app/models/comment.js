const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  post_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Post", // Reference to Post model
    required: true,
  },
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to User model
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ["draft", "published", "deleted", "archived"],
    default: "draft",
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
  updated_at: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("comment", commentSchema);
