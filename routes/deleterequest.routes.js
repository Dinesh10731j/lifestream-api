const DeleteRequest = require("../controller/deleterequest.controller");

const express = require("express");
const DeleteRequestRoute = express.Router();



DeleteRequestRoute.delete("/deleteid/:id");




module.exports = DeleteRequestRoute;