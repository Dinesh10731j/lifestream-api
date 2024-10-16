const express = require("../controller/rejectrequest.controller");
const rejectRequest = require("../controller/rejectrequest.controller");

const rejectRequestRoute = express.Router();

rejectRequestRoute.patch('/reject/:rejectId',rejectRequest);

module.exports = rejectRequestRoute;