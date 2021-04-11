const express = require("express");
const app = express();
const cors = require("cors");
const userRoutes = require("./controller/attendanceController");
const empRoutes = require("./controller/employeeController");
const bodyParser = require("body-parser");

const port = 4000;

app.use(cors());
app.use(bodyParser.json());

app.use("/api", userRoutes);
app.use("/api", empRoutes);

app.listen(port, () => {
  console.log(`Server Is Running on Port: ${port}`);
});
