const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");
const attendanceRoutes = require("./routes/attendance.routes");
const taskRoutes = require("./routes/task.routes");

const app = express();
const morgan = require("morgan");

app.use(cors());
app.use(express.json());
app.use(morgan("dev"));

app.use("/api/auth", authRoutes);
app.use("/api/attendance", attendanceRoutes);
app.use("/api/tasks", taskRoutes);
app.use("/api/admin", require("./routes/admin.routes"));
module.exports = app;
