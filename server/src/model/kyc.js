const mongoose = require('mongoose')
const kycSchema = new mongoose.Schema({

    fullName: String,
    phoneNumber: Number,
    bankName: String,
    bankAccount: Number,
    bankLocation: String,
    documentType: String,
    documentNumber: String,
    documentIssuedOffice: String


})