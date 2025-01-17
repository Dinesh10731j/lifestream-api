const Remove_Account = require("../controller/removeAccount.controller");
const express =  require("express");

const removeAccountRoute = express.Router();



removeAccountRoute.delete("/remove_account",Remove_Account);


module.exports = removeAccountRoute;