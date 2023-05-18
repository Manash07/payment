const mongoose = require('mongoose');
const connectToDb = async()=>{
    try{
      const connection = await mongoose.connect('mongodb://127.0.0.1:27017/chittopaydb');
      if(connection){
        console.log("connnectd to mongodb")
      }
    }catch(err){
      console.log(err)
      console.log("Check")
    }
  }

  module.exports = connectToDb