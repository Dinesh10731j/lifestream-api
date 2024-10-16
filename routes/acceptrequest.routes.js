const express = require('express');
const acceptRequest = require('../controller/acceptrequest.controller');
const acceptRequestRoute = express.Router();


acceptRequestRoute.put('/accept/:requestId',acceptRequest);


module.exports = acceptRequestRoute;