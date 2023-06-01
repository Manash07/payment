const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String, 
    password: String,
    email: String,
    phoneNumber: Number
  });


  module.exports = mongoose.model("Users", userSchema);