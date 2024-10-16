const DeleteRequest = require("../controller/deleterequest.controller");

const express = require("express");
const DeleteRequestRoute = express.Router();



DeleteRequestRoute.delete("/delete-request/:requestId",DeleteRequest);




module.exports = DeleteRequestRoute;