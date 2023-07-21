const mongoose = require("mongoose");
const kycSchema = new mongoose.Schema({
  phoneNumber:{type: String},
  fullName: {type: String, default:"N/A"},
  bankName: {type: String, default:"N/A"},
  bankLocation: {type: String, default:"N/A"},
  bankBranch: {type: String, default:"N/A"},
  bankAccount: {type: Number, default:"N/A"},
  documentType: {type: String, default:"N/A"},
  gender:{type: String},
  status:{type:String, default:"SUBMITTED"},
  userImage:{type:String}
})

module.exports = mongoose.model("Kycform", kycSchema)
