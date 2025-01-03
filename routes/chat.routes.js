const express = require("express");
const chatBot = require("../controller/chat.controller");

const chatRouter = express.Router();


chatRouter.post("/chat",chatBot);



module.exports = chatRouter;