const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config(); // Used to run process.env command
const userRoute = require('./route/userRoute')

const connectToDb = require("./connection/dbconnect");
const userSchema = require("./model/users");

connectToDb();
app.use(express.json());

console.log("Now you are connected to database");

app.use('/',userRoute)

app.listen(8080, () => {
  console.log(`Example app listening on port 8080`);
});
