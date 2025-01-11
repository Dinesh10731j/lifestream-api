const express = require("express");
const receiptantOverview = require("../controller/receiptantOverview")

const receiptantOverViewRoute = express.Router();



receiptantOverViewRoute.get("/receiptant_overview", receiptantOverview);



module.exports = receiptantOverViewRoute;