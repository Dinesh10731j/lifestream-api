const ManageBloodRequest = require("../controller/managebloodrequest.controller");
const express = require("express");
const ManageBloodrequestRoute = express.Router();


ManageBloodrequestRoute.get('/managebloodrequest',ManageBloodRequest);



module.exports = ManageBloodrequestRoute;