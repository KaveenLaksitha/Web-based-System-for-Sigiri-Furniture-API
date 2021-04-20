const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8060;


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

const addRouter = require("./Routes/addProduct.js");
const readRouter = require("./Routes/readProduct.js");
const updateRouter = require("./Routes/updateProduct.js");
const deleteRouter = require("./Routes/deleteProduct.js");


app.use("/products",addRouter);
app.use("/products",readRouter);
app.use("/products",updateRouter);
app.use("/products",deleteRouter);



app.listen(PORT, () => {
    console.log(`Server is up and running on port: ${PORT}`)
});

