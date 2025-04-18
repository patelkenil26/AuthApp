const express = require("express");
const router = express.Router();

const {
  login,
  signup,
  sendOtp,
  changePassword,
} = require("../controllers/Auth");

const { auth } = require("../middlewares/auth");

router.post("/login", login);
router.post("/signup", signup);
router.post("/sendotp", sendOtp);
router.post("/changepassword", auth, changePassword);

const {
  resetPasswordToken,
  resetPassword,
} = require("../controllers/ResetPassword");

router.post("/reset-password-token", resetPasswordToken);
router.post("/reset-password", resetPassword);

module.exports = router;
