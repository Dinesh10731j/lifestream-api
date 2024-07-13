const express = require("express");
const {UpdatePersonalInfo}= require("../controller/updatepersonalinfo.controller");

const PersonalInfoRoutes = express.Router();


PersonalInfoRoutes.patch("/updatepersonalinformation/:userid",UpdatePersonalInfo);




module.exports = PersonalInfoRoutes;