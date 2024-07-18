const ChangeRole = require("../controller/changerole.controller");
const express = require("express");
const UserRoleChangeRoute = express.Router();
UserRoleChangeRoute.put("/changerole/:id",ChangeRole);

module.exports = UserRoleChangeRoute;