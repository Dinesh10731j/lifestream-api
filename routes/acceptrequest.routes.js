const express = require('express');
const acceptRequest = require('../controller/acceptrequest.controller');
const acceptRequestRoute = express.Router();


acceptRequestRoute.put('/accept/:acceptId',acceptRequest);


module.exports = acceptRequestRoute;