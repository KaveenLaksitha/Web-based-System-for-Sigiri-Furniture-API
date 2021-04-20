/**This file contains Database connection implementation
owned by IT19965550
Walpola S.R.
*/

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

//import routes
const postRoutes = require("./routes/posts");
const billRoutes = require("./routes/bills");
const payment = require("./routes/payments");
const salary = require("./routes/salary");

//app middleware
app.use(bodyParser.json());
app.use(cors());

//route middleware
app.use(postRoutes);
app.use(billRoutes);
app.use(payment);
app.use(salary);

//assigning port address for application
const port = process.env.port || 8000;

//connecting the mongodb
const DB_URL =
  "mongodb+srv://sigiriuser:sigiri123@sigirifurniture.4iws3.mongodb.net/sigiriDB?retryWrites=true&w=majority";

mongoose
  .connect(DB_URL, {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
  })
  .then(() => {
    console.log("DB connected successfully");
  })
  .catch((err) => console.log("DB connection is not succuesful", err));

app.listen(port, () => {
  console.log(`App is running on ${port}`);
});
