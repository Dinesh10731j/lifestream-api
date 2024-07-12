const UserSignupModel = require("../model/signup.model");
const ScheduledonationModel = require("../model/scheduledonation.model");

const UserSignup = async (req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body;

   
        const alreadyExists = await UserSignupModel.findOne({ email });

        console.log("alreadyExists:", alreadyExists); 

        if (!alreadyExists) {
            // Create a new user using the UserSignupModel
            const newUser = await UserSignupModel.create({ name, email, password, confirmpassword });

            // Generate a token for the new user
            const token = await newUser.generateToken();
            newUser.token = token; // Assign the generated token to the user object

            const donordata = await ScheduledonationModel.find({ userId: newUser._id }).populate('donordata');

            // Return success response with created user data and populated donordata
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
        // Handling internal server errors
        console.error("Error in user signup:", error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = { UserSignup };
