const GetAlluser = require("../controller/getallusers.controller");
const express = require("express");

const GetAlluserRoute = express.Router();

GetAlluserRoute.get("/users", GetAlluser);

module.exports = GetAlluserRoute;
