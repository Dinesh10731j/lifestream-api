const express = require("express");
const {UserLogin} = require("../controller/login.controller");


const LoginRoutes = express.Router();


LoginRoutes.post("/login",UserLogin);




module.exports = LoginRoutes;