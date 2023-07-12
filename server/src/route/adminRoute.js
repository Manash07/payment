const express = require("express");

const router = express.Router();

const { userData } = require("../controller/admin");

router.get("/userdata", userData);

module.exports = router;
