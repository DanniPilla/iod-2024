const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const likeSchema = new Schema({
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
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});
module.exports = mongoose.model("like", likeSchema);
