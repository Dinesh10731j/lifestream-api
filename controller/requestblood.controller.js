
const RequestModel = require("../model/requestblood.model");
const RequestBlood = async (req,res)=>{
    try{
        const {fullName,urgency,quantity,message,email,bloodGroup} = req.body;
const RequestUsersdetails = await RequestModel.create({fullName,urgency,quantity,message,email,bloodGroup});


if(RequestUsersdetails){

    return res.status(201).send({msg:'Blood request send successfully!',data:RequestUsersdetails})
}


res.status(404).send({msg:'Failed to blood request'})


    }catch{
res.status(500).json({msg:"Internal server error",success:false});
    }
}


module.exports = RequestBlood;