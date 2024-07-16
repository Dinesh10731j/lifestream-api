const RequestModel = require("../model/requestblood.model");
const ManageBloodRequest = async (req,res)=>{

    try{
        const Requestblooddata = await RequestModel.find({});
      

   if(Requestblooddata.length === 0){
    return res.status(404).send({msg:'Blood request not found',success:false});
   }

res.status(200).send({msg:"Receiptant Request fetch successfully",success:true,data:Requestblooddata})

    }catch(err){
        res.status(500).send({msg:'Internal server error',success:false},err)
    }


}



module.exports = ManageBloodRequest;