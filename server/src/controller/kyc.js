const mongoose = require("mongoose");
const Kyc = require("../model/kyc");
const path = require("path");

const form = async (req, res) => {
  try {
    const dataFile = { ...req.body, userImage: req.file.filename };
    // console.log(dataFile)
    const getData = await Kyc.findOne({ phoneNumber: req.body.phoneNumber });
    if (getData) {
      res.status(401).json({
        msg: "Could not create",
      });
    } else {
      const data = await Kyc.create(dataFile);

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
          image: data.userImage,
          id: data.__id,
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
  try {
    const data = await Kyc.findOne({ phoneNumber: req.body.phoneNumber });

    if (data) {
      res.json({
        data,
      });
    } else {
      res.status(404).json({
        msg: "Could not find one",
      });
    }
  } catch (err) {
    console.log(err);
  }
};

const getImg = async (req, res) => {
  try {
    const data = await Kyc.findOne({ phoneNumber: req.params.id });
    console.log(data);
    const kycImage = data.userImage;
    const imgPath = path.join(__dirname, "../../uploads", kycImage);
    console.log(imgPath);
    res.sendFile(imgPath);
  } catch (err) {
    console.log(err);
  }
};

module.exports = { form, getKyc, getImg };
