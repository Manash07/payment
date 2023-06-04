const express = require("express");

const router = express.Router();

const Users = require("../model/users");

const { register, login } = require("../controller/users");

router.post("/register", register);

router.post("/login", login);

module.exports = router;
