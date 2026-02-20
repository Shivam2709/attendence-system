const mongoose = require("mongoose");

const attendanceSchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    attendance_date: {
      type: Date,
      required: true,
    },
  },
  { timestamps: true },
);

// Prevent duplicate attendance
attendanceSchema.index({ user: 1, attendance_date: 1 }, { unique: true });

module.exports = mongoose.model("Attendance", attendanceSchema);
