const UserSignupModel = require("../model/signup.model");


const RemoveUser = async (req,res)=>{
    const {userId} = req.params;

    try{
        const removeduser = await UserSignupModel.findByIdAndDelete(userId);


        if(!removeduser){
            return  res.status(404).send({msg:'User failed removed ',success:false})
        }


        return res.status(200).send({msg:'User removed successfully',data:removeduser,success:true})

    }catch(err){
        res.status(500).send({msg:'Internal server error',success:false},err)
    }

}


module.exports = RemoveUser;