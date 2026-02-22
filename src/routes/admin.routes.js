const express = require("express");
const router = express.Router();
const auth = require("../middleware/auth.middleware");
const adminOnly = require("../middleware/admin.middleware");
const adminController = require("../controllers/admin.controller");

router.get(
  "/attendance/today",
  auth,
  adminOnly,
  adminController.getTodayAttendance,
);

module.exports = router;
