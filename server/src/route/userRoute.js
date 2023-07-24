const express = require("express");

const router = express.Router();

const multer = require("multer");

const { form, getKyc } = require("../controller/kyc");

const { register, login } = require("../controller/users");

router.post("/register", register);

router.post("/login", login);

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    console.log(file);
    cb(null, Date.now() + file.originalname);
  },
});

const upload = multer({ storage: storage });

router.post("/kyc", upload.single('userImage'),form);

router.post("/details", getKyc);

module.exports = router;
