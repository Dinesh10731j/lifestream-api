const express = require("express");
const GetAllBloodRequest = require("../controller/getallbloodrequest.controller")
const BloodRequestHistoryRoute = express.Router();


BloodRequestHistoryRoute.get("/getbloodrequesthistory",BloodRequestHistoryRoute);



module.exports = BloodRequestHistoryRoute;