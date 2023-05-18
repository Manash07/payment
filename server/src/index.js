const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
require("dotenv").config();
const userRoute = require('./route/userRoute')

const connectToDb = require("./connection/dbconnect");
const userSchema = require("./model/users");

connectToDb();
app.use(express.json());

console.log("Now you are connected to database");

app.use('/',userRoute)

app.listen(process.env.port, () => {
  console.log(`Example app listening on port ${process.env.port}`);
});
