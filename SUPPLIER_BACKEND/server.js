const express = require("express");//framework
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();


const PORT = process.env.PORT || 8070; //if 8070 port is not available connect another port is available

app.use(cors());//It is a middleware from express
app.use(bodyParser.json());//get values as a request from frontend and extract the values to BACKEND

const URL = process.env.MONGODB_URL;

mongoose.connect(URL,{
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
});

const connection = mongoose.connection;//create connection
connection.once("open", () => {//This event open to only one time connect to the data base
    console.log("Mongodb Connection Success!");//If mongo dab connection is success display this msg
})

const supplierRouter = require("./routes/Suppliers.js");

app.use("/Supplier",supplierRouter);


const tenderRounter = require("./routes/Tenders.js");

app.use("/Tender", tenderRounter);




app.listen(PORT, ()=> { //show how the port is running
    console.log(`Server is up and running on port number: ${PORT}`)


}) 


