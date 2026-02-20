const Attendance = require("../models/attendance.model");

exports.markAttendance = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    await Attendance.create({
      user: req.user._id,
      attendance_date: today,
    });

    res.json({ message: "Attendance marked successfully" });
  } catch (error) {
    res.status(400).json({ message: "Already marked today" });
  }
};
