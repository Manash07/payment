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
      const data = await Users.create(req.body); // Here data is created in database
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
  try {
    const data = await Users.findOne({ phoneNumber: req.body.phoneNumber });

    if (data) {
      const isMatched = await bcrypt.compare(req.body.password, data.password);
      const { password, ...allOtherItems } = req.body;
      const token = jwt.sign(allOtherItems, process.env.SECRET_KEY, {
        expiresIn: "12h",
      });

      console.log(token);

      console.log(isMatched);
      if (isMatched && token) {
        res.status(200).json({
          message: "Login successful",
          token: token,
          isLoggedIn: true,
          id: data._id,
          role: data.role,
          name: data.name,
        });
      } else {
        res.status(401).json({
          message: "Login failed unauthorized access",
        });
      }
    } else {
      res.status(204).json({
        message: "Login failed cannot found user",
      });
    }
  } catch (error) {
    res.status(404).json({
      message: "Server error",
    });
  }
};

const kycDetails = async(req, res) =>{


  try{

    console.log("Hello KYC detail")


  }catch(err){

    console.log(err)
  }


}

module.exports = { register, login, kycDetails };
