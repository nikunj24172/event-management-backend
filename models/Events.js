const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    time: { type: String },
    location: { type: String },
    isActive: {
      type: Boolean,
      default: true, // active by default
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Event", eventSchema);
