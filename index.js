const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./controller/attendanceController");
const empRoutes = require("./controller/employeeController");
const leaveRoutes = require("./controller/leaveController");
const bodyParser = require("body-parser");

const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRoutes);
app.use("/api", empRoutes);
app.use("/api", leaveRoutes);

app.listen(port, () => {
  console.log(`Server Is Running on Port: ${port}`);
});
