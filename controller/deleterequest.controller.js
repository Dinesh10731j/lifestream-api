
const RequestModel = require("../model/requestblood.model");
const DeleteRequest = async (req,res)=>{

    try{
        const {requestId} = req.body;

        const deletedRequest = await RequestModel.findByIdAndDelete(requestId);
    
        if(!deletedRequest){
    
            return res.status(400).json({msg:'Failed to delete request',status:false})
        }
    
        res.json({ message: 'Request deleted successfully', success:true});
    

    }catch(err){
        res.status(500).send({msg:'Internal server error' ,error:err,status:false});
    }

   



}



module.exports = DeleteRequest;