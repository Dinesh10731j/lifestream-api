const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();


const Routes = require("./routes/signup.routes")
const server= express();
const port = process.env.PORT || 7000;

server.use(express.json());
server.use(morgan("combined"));
server.use(cors());
server.use("/api",Routes);
server.listen(port,()=>{

    console.log(`Listening to port ${port}`)


})