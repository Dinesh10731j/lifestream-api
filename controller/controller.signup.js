const UserSignupModel = require("../model/signup.model");
const UserSignup =  async (req,res)=>{

    try{
        const {name,email,password,confirmpassword} = req.body;

        const Userssignupdata = await UserSignupModel.create({name,email,password,confirmpassword});
        const token = await Userssignupdata.generateToken();
        Userssignupdata.token= token;
        console.log(Userssignupdata);
       

        res.status(201).json({success:true,message:"Login Successful",data:Userssignupdata,roles:Userssignupdata.role});

    }catch(error){

        res.status(500).send({msg:"Internal server error"});
    }
  


}





module.exports = {UserSignup};





