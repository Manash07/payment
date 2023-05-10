const mongoose = require("mongoose");

const userSchema = require("../model/users");

const Users = mongoose.model("Users", userSchema);

const register = async (req, res) => {
  const data = await Users.create(req.body);
};

const getUserData = async (req, res) => {
  const data = await Users.find();
  res.json({ userList: data });
};

module.exports = { register, getUserData };
