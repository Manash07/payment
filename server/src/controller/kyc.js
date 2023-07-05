const mongoose = require("mongoose");
const Kyc = require("../model/kyc");

const form = async (req, res) => {
  try {
    const getData = await Kyc.findOne({ phoneNumber: req.body.phoneNumber });
    console.log(getData);

    if (getData) {
      res.status(401).json({
        msg: "Could not create",
      });
    } else {
      const data = await Kyc.create(req.body);

      if (data) {
        res.status(200).json({
          msg: "Form submission successful",
          phoneNumber: data.phoneNumber,
          status: data.status,
          fullName: data.fullName,
          bankName: data.bankName,
          bankLocation: data.bankLocation,
          bankAccount: data.bankAccount,
          bankBranch: data.bankBranch,
          documentIssuedOffice: data.documentIssuedOffice,
          documentNumber: data.documentNumber,
          documentType: data.documentType,
        });
        res.json({
          msg: "Created successfully",
        });
      } else {
        res.json({
          msg: "User exists already",
        });
      }
    }
  } catch (err) {
    console.log("Error");
  }
};

const getKyc = async (req, res) => {
  const data = await Kyc.findOne({ phoneNumber: req.body.phoneNumber});
  if (data) {
    res.json({
      data,
    });
  } else {
    res.status(404).json({
      msg: "Could not find one",
    });
  }
};
module.exports = { form, getKyc };
