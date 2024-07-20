const UserSignupModel = require("../model/signup.model");
const ScheduledonationModel = require("../model/scheduledonation.model");
const bcrypt = require("bcryptjs");

const UserSignup = async (req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body;

        // Check if passwords match
        if (password !== confirmpassword) {
            return res.status(400).json({
                success: false,
                message: "Passwords do not match"
            });
        }

        const alreadyExists = await UserSignupModel.findOne({ email });

     

        if (!alreadyExists) {
            // Hash the password before saving
            const hashedPassword = await bcrypt.hash(password, 10);

            // Create a new user using the UserSignupModel with hashed password
            const newUser = await UserSignupModel.create({ 
                name, 
                email, 
                confirmpassword:hashedPassword,
                password: hashedPassword 
            });


            const token = await newUser.generateToken();
            newUser.token = token; 

            const donordata = await ScheduledonationModel.find({ userId: newUser._id });

           
            return res.status(201).json({
                success: true,
                message: "User Registration Successful",
                data: newUser,
                donordata: donordata,
                roles: newUser.role
            });
        } else {
            // Return failure response if user already exists
            return res.status(403).json({
                success: false,
                message: "User Already Exists"
            });
        }
    } catch (error) {
     
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = { UserSignup };
