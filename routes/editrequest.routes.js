const  EditRequest = require("../controller/editrequest.controller");
const express = require("express");

const RequestEditRoute = express.Router();



RequestEditRoute.patch("/editid/:editid",EditRequest);


module.exports = RequestEditRoute;