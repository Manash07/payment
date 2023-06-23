const mongoose = require("mongoose");
const Kyc = require("../model/kyc");


const form = async (req, res) => {
  try {
    const getForm = await Kyc.find({ bankAccount: req.body.bankAccount });

    if (getForm.length === 0) {
      const data = await Kyc.create(req.body);

      if (data) {
        res.json({
          msg: "Created successfully",
        });
      } else {
        res.json({
          msg: "Could not create",
        });
      }
    }else{

        res.json({
            msg:"User exists already"
        })
    }
  } catch (err) {}
};

module.exports = {form}
