const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
const VehicleRouter = require("./routes/vehicles.js");
const MaintenanceRouter = require("./routes/Maintenances.js");
require("dotenv").config();

const PORT = process.env.PORT || 8050;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("Mongodb Connection Success!");
})

app.use("/vehicle",VehicleRouter);
app.use("/Maintenance",MaintenanceRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
});