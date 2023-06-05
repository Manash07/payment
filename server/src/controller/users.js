const mongoose = require("mongoose");
const Users = require("../model/users");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (req, res) => {
  try {
    const userExist = await Users.find({ phoneNumber: req.body.phoneNumber });
    if (userExist.length == 0) {
      const hash = bcrypt.hashSync(req.body.password, 10);
      req.body.password = hash;
      const data = await Users.create(req.body);
      if (data) {
        res.json({
          msg: "Registered Successfully",
        });
      } else {
        console.log("Error");
      }
    } else {
      res.sendStatus(404);
      res.json({ msg: "Could not register" });
    }
  } catch (error) {
    console.log("Error");
  }
};

const login = async (req, res) => {
  try{

    const data = await Users.find({phoneNumber: req.body.phoneNumber});
    if (data) {
      const isMatched = await bcrypt.compare(req.body.password, data[0].password);
      if (data.length != 0 && isMatched) {
        res.sendStatus(200);
      } else {
        res.sendStatus(209);
      }
    }

  }
  catch(error){

    res.sendStatus(404)

  }

};

module.exports = { register, login };
