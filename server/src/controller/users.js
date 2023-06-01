const mongoose = require("mongoose");
const Users = require("../model/users");
const bcrypt = require("bcrypt");

const register = async (req, res) => {
  try {
    const userExist = await Users.find({ phoneNumber: req.body.phoneNumber });

    if (userExist.length == 0) {
      const hash = bcrypt.hashSync(req.body.password, 10);
      req.body.password = hash;
      const data = await Users.create(req.body);
      if (data) {
        res.json({
          msg: "registered successfully",
        })
      } else {
        res.sendStatus(409);
      }
    }else{

      res.sendStatus(404);

    }

  } catch (error) {
    console.log("Error");
  }
  
 
};

const getUserData = async (req, res) => {
  const data = await Users.find();
  res.json({ userList: data });
};

module.exports = { register, getUserData };
