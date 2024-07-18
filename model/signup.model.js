const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const SignupSchema = new mongoose.Schema({
    name:{

        type:String,
        required:[true,'Name  is required']
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
        enum:['admin','donor','receiptant'],
        default: 'donor',
    },

    donordata:{
        type:mongoose.Schema.ObjectId,
        ref:"Scheduledonation"
    },


    token:String
});


SignupSchema.methods.generateToken= async()=>{
    const token = jwt.sign({id:this._id,name:this.name,role:this.role,email:this.email,password:this.passwword},process.env.Signature);
    this.token = token;
    return token;
}

const UserSignupModel = mongoose.model("Usersignup",SignupSchema);

module.exports = UserSignupModel;