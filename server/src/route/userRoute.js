const express = require("express");

const router = express.Router();

const Users = require("../model/users");

const { register, login, kycDetails } = require("../controller/users");

router.post("/register", register);

router.post("/login", login);

router.post("/kyc-details", kycDetails)

module.exports = router;
