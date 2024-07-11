const express = require("express");
const {UserSignup} = require("../controller/controller.signup");



const SignupRoutes = express.Router();


SignupRoutes.post("/signup",UserSignup);




module.exports = SignupRoutes;