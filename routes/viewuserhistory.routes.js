const ViewUserHistory = require("../controller/viewuserhistory.controller");
const express = require("express");
const ViewUserHistoryRoute = express.Router();


ViewUserHistoryRoute.get("/userhistory/:id",ViewUserHistory);


module.exports = ViewUserHistoryRoute;