const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const SignupSchema = new mongoose.Schema({
    name:{

        type:String,
        required:[true,'E-mail is required']
    },
    email:{
        
       type: String,
       unique:true,
       required:[true,'E-mail is required'],
       
    },
    password:{
        type:String,
        required:[true,'Password is required']
    },
    confirmpassword:String,
    role:{
        type:String,
        enum:['admin','donor','receiptant']
    },


    token:String
});


SignupSchema.methods.generateToken=()=>{
    const token = jwt.sign({id:this._id},process.env.Signature)
}

const UserSignupModel = mongoose.model("Usersignup",SignupSchema);

module.exports = UserSignupModel;