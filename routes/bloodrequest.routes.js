const express = require("express");
const RequestBlood  = require("../controller/requestblood.controller");


const BloodRequestRoutes = express.Router();


BloodRequestRoutes.post("/bloodrequest",RequestBlood);




module.exports = BloodRequestRoutes ;