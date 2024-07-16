const RequestModel = require("../model/requestblood.model");
const ManageBloodRequest = async (req,res)=>{

    try{
        const Requestblooddata = await RequestModel.find({});
        console.log('This is the  data of requestblood data',Requestblooddata)

   if(Requestblooddata.length>0){
    return res.status(404).send({msg:'Blood request not found',success:false});
   }

res.status(200).send({msg:"Receiptant Request fetch successfully",success:true})

    }catch(err){
        res.status(500).send({msg:'Internal server error',success:false},err)
    }


}



module.exports = ManageBloodRequest;