const Attendance = require("../models/attendance.model");

exports.getTodayAttendance = async (req, res) => {
  try {
    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const records = await Attendance.find({
      attendance_date: today,
    }).populate("user", "name email");

    res.json(records);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
