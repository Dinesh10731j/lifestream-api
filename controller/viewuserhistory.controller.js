const RequestModel = require("../model/requestblood.model");
const ViewUserHistory = async (req,res)=>{
try{

const {id} = req.params;
const SingleUserhistory = await RequestModel.findById({id});


if(!SingleUserhistory){
    return res.status(404).send({msg:'User history not found',success:false})
}


return res.status(200).send({msg:'history fetch successfully',data:SingleUserhistory,success:false})

}catch(err){
    res.status(500).send({msg:'Internal server error',success:false})
}

}


module.exports = ViewUserHistory;