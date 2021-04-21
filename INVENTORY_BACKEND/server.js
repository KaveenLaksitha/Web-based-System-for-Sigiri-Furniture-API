const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); //have environment varibales

const app = express(); // creating a express server
const port = process.env.PORT || 5000;

app.use(cors()); // middleware
app.use(express.json()); //allow to parse json, server is sending and receiving json

const uri = process.env.ATLAS_URI; //databse uri, getting from mongo db atlas dashboard
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true,  useUnifiedTopology: true }//flags
); // store connection

const connection = mongoose.connection;
connection.once('open', () => { // once the connection is established show msg
    console.log("MongoDB database connection established successfully");
    
})

const inventoryRouter  = require('./routes/inventory');
const itemsRouter = require('./routes/items');

app.use('/inventories', inventoryRouter); // using these files
app.use('/items', itemsRouter);


app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});