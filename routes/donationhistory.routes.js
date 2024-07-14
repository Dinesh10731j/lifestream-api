const express = require("express");
const DonationHistory = require("../controller/donordonationhistory.controller");

const DonordonationhistoryRoutes = express.Router();

DonordonationhistoryRoutes.get("/donordonationhistory/:email", DonationHistory);

module.exports = DonordonationhistoryRoutes;
