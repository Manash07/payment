const express = require("express");

const router = express.Router();

const {form, getKyc} = require("../controller/kyc")

const { register, login } = require("../controller/users");

router.post("/register", register);

router.post("/login", login);

router.post("/kyc", form);

router.get("/details", getKyc);

module.exports = router;
