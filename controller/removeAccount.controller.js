const UserSignupModel = require("../model/signup.model");

const Remove_Account = async (req, res) => {
    try {
        const { userId } = req.params;

    
        if (!userId) {
            return res.status(400).json({ 
                msg: "User ID is required.", 
                success: false 
            });
        }

        const accountRemoved = await UserSignupModel.findByIdAndDelete(userId);

        if (!accountRemoved) {
            return res.status(404).json({ 
                msg: "No user found with the given ID.", 
                success: false 
            });
        }

      
        res.status(200).json({ 
            msg: "User account successfully removed.", 
            success: true 
        });

    } catch (error) {
       
        res.status(500).json({ 
            msg: "Internal server error.", 
            success: false, 
            error: error.message 
        });
    }
};

module.exports = Remove_Account;
