const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
const dotenv = require("dotenv"); // Used to run process.env command
const userRoute = require('./route/userRoute')
dotenv.config({
  path: '/home/manash/Desktop/codeFile/Chittopay/server/.env'
});


const connectToDb = require("./connection/dbconnect");
const userSchema = require("./model/users");

connectToDb();
app.use(express.json());

console.log("Now you are connected to database");

app.use('/',userRoute)

app.listen(process.env.PORT, () => {

  console.log(`Server is listening on port`,process.env.PORT);
});



