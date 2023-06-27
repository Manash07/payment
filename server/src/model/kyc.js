const mongoose = require("mongoose");
const kycSchema = new mongoose.Schema({
  phoneNumber:{type: Number},
  fullName: {type: String, default:"N/A"},
  bankName: {type: String, default:"N/A"},
  bankLocation: {type: String, default:"N/A"},
  bankBranch: {type: String, default:"N/A"},
  bankAccount: {type: Number, default:"N/A"},
  documentType: {type: String, default:"N/A"},
  documentNumber: {type: String, default:"N/A"},
  documentIssuedOffice: {type: String, default:"N/A"},
  status:{type:String, default:"SUBMITTED"}
})

module.exports = mongoose.model("Kycform", kycSchema)
