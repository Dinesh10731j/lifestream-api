

const RequestModel = require("../model/requestblood.model");
const RequestBlood = async (req,res)=>{
    try{
        const {fullName,urgency,quantity,message,email,bloodGroup} = req.body;
const RequestUsersdetails = await RequestModel.create({fullName,urgency,quantity,message,email,bloodGroup});

res.status(201).send({msg:'Blood request send successfully!',data:RequestUsersdetails})

       

    }catch(err){
res.status(500).send({msg:"Internal server error"});
    }
}


module.exports = RequestBlood;