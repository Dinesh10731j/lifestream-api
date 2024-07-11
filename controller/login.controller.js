const UserSignupModel = require("../model/signup.model");
const UserLogin =  async (req,res)=>{

    try{
        const {email,password} = await req.body;


        const Userssignupdata = await UserSignupModel.findOne({email});

        const token = await Userssignupdata.generateToken();
        Userssignupdata.token= token;

        if(!Userssignupdata){
            return res.status(400).send({msg:'Invalid credintials' ,success:false});
        }


if(Userssignupdata){
    return res.status(200).send({msg:"Login Successsful",success:true,data:Userssignupdata})
}

    

    }catch(error){

        res.status(500).send({msg:"Internal server error"});
    }
  


}





module.exports = {UserLogin};





