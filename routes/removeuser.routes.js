const RemoveUser = require("../controller/removeuser.controller");

const express = require("express");

const RemoveUserRoute = express.Router();


RemoveUserRoute.delete("/deleteuser/:userId",RemoveUser);



module.exports = RemoveUserRoute;