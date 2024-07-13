const express = require("express");
const UpdatePersonslInfo = require("../controller/updatepersonalinfo.controller");

const PersonalInfoRoutes = express.Router();


PersonalInfoRoutes.patch("/updatepersonalinformation/:userid",UpdatePersonslInfo);




module.exports = PersonalInfoRoutes;