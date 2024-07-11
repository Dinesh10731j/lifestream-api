const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors")

dotenv.config();


const SignupRoutes = require("./routes/signup.routes");
const LoginRoutes = require("./routes/login.routes");
const GetProfileRoutes = require("./routes/getprofile.routes")
const Connectdb = require("./utils/dbconn")
const server= express();
const port = process.env.PORT || 7000;

server.use(express.json());
server.use(morgan("combined"));
server.use(cors());
server.use("/api",SignupRoutes);
server.use("/api",LoginRoutes);
server.use("/api",GetProfileRoutes);

Connectdb().then(()=>{
    server.listen(port,()=>{

        console.log(`Listening to port ${port}`);
    
    
    })

})
