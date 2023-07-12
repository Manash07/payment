const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
app.use(cors());
const dotenv = require("dotenv"); // Used to run process.env command
const userRoute = require("./route/userRoute");
const adminRoute = require("./route/adminRoute");
dotenv.config({
  path: "/home/manash/Desktop/codeFile/Chittopay/server/.env",
});

const kycSchema = require("./model/kyc");
const connectToDb = require("./connection/dbconnect");
const userSchema = require("./model/users");
const { userData } = require("./controller/admin");

connectToDb();
app.use(express.json());

console.log("Now you are connected to database");

app.use("/", userRoute);
app.use("/", adminRoute);

app.listen(process.env.PORT, () => {
  console.log(`Server is listening on port`, process.env.PORT);
});
