const express = require('express')
const rejectRequest = require("../controller/rejectrequest.controller");

const rejectRequestRoute = express.Router();

rejectRequestRoute.put('/reject/:rejectId',rejectRequest);

module.exports = rejectRequestRoute;