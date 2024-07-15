

const RequestModel = require("../model/requestblood.model");
const RequestBlood = (req,res)=>{
    try{
        const {fullName,urgency,quantity,message,email,bloodGroup} = req.body;
       

    }catch(err){
res.status(500).send({msg:"Internal server error"});
    }
}


module.exports = RequestBlood