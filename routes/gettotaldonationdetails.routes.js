const GetTotalDonationdetails = require("../controller/gettotaldonationdetails.controller");
const express = require("express");
const GetTotalDonationdetailsRoutes = express.Router();
GetTotalDonationdetailsRoutes.get("/totaldonationinfo",GetTotalDonationdetails);
module.exports = GetTotalDonationdetailsRoutes ;


