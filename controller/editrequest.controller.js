const RequestModel = require("../model/requestblood.model");
const EditRequest =async (req,res)=>{
    try{
        const {editid} = req.params;

        const editedData = await RequestModel.findByIdAndUpdate(editid)

    }catch(err){

    }
    
}



module.exports = EditRequest;