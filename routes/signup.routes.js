const express = require("express");
const {UserSignup} = require("../controller/controller.signup");



const Routes = express.Router();


Routes.post("/signup",UserSignup);




module.exports = Routes