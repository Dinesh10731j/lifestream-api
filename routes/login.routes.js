const express = require("express");
const {UserLogin} = require("../controller/login.controller");
const Auth = require("../middleware/VerifyToken")



const LoginRoutes = express.Router();


LoginRoutes.post("/login",Auth,UserLogin);




module.exports = LoginRoutes;