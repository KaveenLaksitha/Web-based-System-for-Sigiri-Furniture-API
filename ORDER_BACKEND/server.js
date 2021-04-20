const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors =require("cors");
const dotenv =require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8090;

app.use(cors());//a middleware of express to connect with frontend and backend  
app.use(bodyParser.json());//bodyParser takes the as a request from frontend and extract the values to backend

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopologyL:true,
    useFindandModify: false
});


const connection = mongoose.connection;
connection.once("open",() => {
    console.log("Mongodb Connection success!");
})


const customerRouter = require("./routes/customerProfile.js");
const orderRouter = require("./routes/orders.js");
const orderItemRouter= require("./routes/orderItems.js");


app.use("/customer",customerRouter);//table name is created at this point
app.use("/order",orderRouter);
app.use("/orderItem",orderItemRouter);

app.listen(PORT,() =>{
    console.log(`Server is up and running on port no: ${PORT}`)
})