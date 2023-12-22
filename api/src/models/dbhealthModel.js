const mongoose = require("mongoose");

// Creating DB health Schema
const healthSchema = new mongoose.Schema(
  {
    description: { type: String, required: true },
    remarks: { type: String },
  },
  { timestamps: true }
);

// Health model
module.exports = mongoose.model("Healthdb", healthSchema);
