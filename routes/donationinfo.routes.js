const DonationInfo = require("../controller/donationinfo.controller");
const express = require("express");
const DonationInfoRouter = express.Router();

DonationInfoRouter.get("/donation-info",DonationInfo);



module.exports = DonationInfoRouter;