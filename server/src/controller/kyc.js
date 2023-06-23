const mongoose = require("mongoose");
const Kyc = require("../model/kyc");

const form = async (req, res) => {
  try {
    const getData = await Kyc.find({ status: req.body.status });

    if (getData != 'SUBMITTED') {
      const data = await Kyc.create(req.body);

      if (data) {
        res.status(200).json({
          msg: "Form submission successful",
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
          msg: "Could not create",
        });
      }
    } else {
      res.json({
        msg: "User exists already",
      });
    }
  } catch (err) {}
};

module.exports = { form };
