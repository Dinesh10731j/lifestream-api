const express = require("express");
const DonationHistory = require("../controller/donordonationhistory.controller");

const Auth = require("../middleware/VerifyToken");


const DonordonationhistoryRoutes = express.Router();


DonordonationhistoryRoutes.get("/donordonationhistory/:email",Auth,DonationHistory);




module.exports = DonordonationhistoryRoutes;