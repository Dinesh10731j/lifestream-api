const Donordonationstats = require("../controller/donordonationstats.controller");
const express = require("express");
const DonordonationStatsRoutes = express.Router();

DonordonationStatsRoutes.get('/donor-donation-stats/:userId',Donordonationstats);


module.exports = DonordonationStatsRoutes;