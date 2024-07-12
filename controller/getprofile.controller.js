const UserSignupModel = require("../model/signup.model");
const GetProfile = async (req,res)=>{

    try{
        const {userid} = req.params;
        const userprofile = await UserSignupModel.findById(userid);
      

        if(!userprofile){
            return res.status(404).send({message:"User profile not found",message:false})
        }
        console.log(userprofile)
        
    return res.status(200).send({data:userprofile,status:true});
       

    }catch(error){

        res.send({msg:"User profile not found",success:false})

    }



}


module.exports = GetProfile;