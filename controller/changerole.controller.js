const UserSignupModel = require("../model/signup.model");
const ChangeRole = async (req,res)=>{
    try{
        const {role} = req.body;
    console.log('This is params of changeroles',req.params);

const updatedRole = await UserSignupModel.findOneAndUpdate({role:role},{new:true});

if(!updatedRole){
    return res.status(404).send({msg:'User not found',success:false})
}

return res.status(200).send({msg:'Role updated successfully',data:updatedRole})

    }catch(err){
        res.status(500).send({msg:'Internal server error',success:false,err:err});
    }

}


module.exports = ChangeRole;