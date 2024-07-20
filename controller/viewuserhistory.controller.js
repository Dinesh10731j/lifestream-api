const RequestModel = require("../model/requestblood.model");
const ViewUserHistory = async (req,res)=>{
try{

const {email} = req.params;
console.log('This is a email and the email is like this ',email)
const Userhistory = await RequestModel.find(email);


if(!Userhistory){
    return res.status(404).send({msg:'User history not found',success:false})
}


return res.status(200).send({msg:'history fetch successfully',data:SingleUserhistory,success:false})

}catch(err){
    res.status(500).send({msg:'Internal server error',success:false,error:err})
}

}


module.exports = ViewUserHistory;