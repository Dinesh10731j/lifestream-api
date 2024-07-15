const RequestModel = require("../model/requestblood.model");
const GetAllBloodRequest = async (req,res)=>{
    const {userid} = req.params;

    try{
        const requestedbloodhistory = await RequestModel.find({userid});

        if(requestedbloodhistory){
return res.status(200).send({msg:'Blood request history succeesful',data:requestedblood,success:true})
        }

        res.status(404).send({msg:'Blood request history not found', success:false})

        

    }catch{


        res.status(500).send({msg:'Internal server error',success:false})


    }

}

module.exports = GetAllBloodRequest;