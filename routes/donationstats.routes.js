const express = require('express');
const DonationStatsRoutes = express.Router();
const  getDonationStats  = require('../controller/scheduledonation.controller');
DonationStatsRoutes.get('/donation-stats', getDonationStats);

module.exports = DonationStatsRoutes;
