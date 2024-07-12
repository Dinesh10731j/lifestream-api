const express = require("express");
const ScheduleDonation = require("../controller/scheduledonation.controller");



const DonationScheduleRoutes = express.Router();


DonationScheduleRoutes.post("/schedulenewdonations",ScheduleDonation);




module.exports=DonationScheduleRoutes;