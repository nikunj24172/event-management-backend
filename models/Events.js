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
      default: true,
    },
  },
  { timestamps: true }
);

eventSchema.index({ date: 1 });              
eventSchema.index({ isActive: 1 });          
eventSchema.index({ isActive: 1, date: 1 }); 

module.exports = mongoose.model("Event", eventSchema);
