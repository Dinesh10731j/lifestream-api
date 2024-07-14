const express = require("express");
const {UserSignup} = require("../controller/controller.signup");
const Auth = require("../middleware/VerifyToken");



const SignupRoutes = express.Router();


SignupRoutes.post("/signup",Auth,UserSignup);




module.exports = SignupRoutes;