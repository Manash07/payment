const express = require("express");

const router = express.Router();

const {form} = require("../controller/kyc")

const { register, login } = require("../controller/users");

router.post("/register", register);

router.post("/login", login);

router.post("/kyc", form);

module.exports = router;
