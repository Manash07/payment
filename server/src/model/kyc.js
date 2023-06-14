const mongoose = require("mongoose");
const kycSchema = new mongoose.Schema({
  fullName: String,
  phoneNumber: Number,
  bankName: String,
  bankLocation: String,
  bankBranch: String,
  bankAccount: Number,
  documentType: String,
  documentNumber: String,
  documentIssuedOffice: String,
})
