const mongoose = require('mongoose')
const userSchema = new mongoose.Schema({
    name: String, 
    password: String,
    email: String,
    phoneNumber: Number,
    role: {
      type: String,
      default: "user",
    },
  });


  module.exports = mongoose.model("Users", userSchema);