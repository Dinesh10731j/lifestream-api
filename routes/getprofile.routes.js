const express = require("express");
const GetProfile = require("../controller/getprofile.controller");



const GetProfileRoutes = express.Router();


GetProfileRoutes.get("/userprofile/:userid",GetProfile);




module.exports = GetProfileRoutes;