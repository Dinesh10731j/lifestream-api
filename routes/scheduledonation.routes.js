const express = require("express");
const ScheduleDonation = require("../controller/scheduledonation.controller");



const DonationScheduleRoutes = express.Router();


DonationScheduleRoutes.get("/schedulenewdonations",ScheduleDonation);




module.exports=DonationScheduleRoutes;