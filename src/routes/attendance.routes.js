const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const { markAttendance } = require("../controllers/attendance.controller");

router.post("/", auth, markAttendance);

module.exports = router;
