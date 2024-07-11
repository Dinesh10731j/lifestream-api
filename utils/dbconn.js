const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

const Connectdb = async ()=>{
    try{
       await mongoose.connect(process.env.MONGO_URL);

        console.log("Database Connected Successfully");

    }catch(error){
        console.log("Erroe while connectiong data",error);

    }

   
}


module.exports=Connectdb;