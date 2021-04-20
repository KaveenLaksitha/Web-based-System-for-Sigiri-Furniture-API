const express = require("express");//framework
const mongoose = require("mongoose");
const bodyParser = require("body-parser");//get values as a request from frontend and extract the values
const cors = require("cors");//express middleware-  connect node.js and react (dependencies)
const dotenv = require("dotenv");
const app = express();
require("dotenv").config();

const PORT = process.env.PORT || 8080; //if 8070 port is not available connect another port is available

app.use(cors());//use cors
app.use(bodyParser.json());//json -key value pares 

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

const promotionRouter = require("./routes/promotions.js");

app.use("/promotion", promotionRouter);//database table name(route)

const productpriceRouter = require("./routes/productprices.js");

app.use("/productprice", productpriceRouter);

app.listen(PORT, ()=> {//this is display to port is runnig or not
    console.log(`Server is up and running on port number: ${PORT}`)
}) 