const mongoose = require("mongoose");


const TaskSchema = mongoose.Schema({
 title: {
    type: String,
    required: [true, "Please add a title"],
    trim: true,
  },
  description: {
    type: String
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Task", TaskSchema);