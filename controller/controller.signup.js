const UserSignupModel = require("../model/signup.model");

const UserSignup = async (req, res) => {
    try {
        const { name, email, password, confirmpassword } = req.body;

        // Create a new user using the UserSignupModel
        const newUser = await UserSignupModel.create({ name, email, password, confirmpassword });

        // Generate a token for the new user
        const token = await newUser.generateToken();
        newUser.token = token; // Assign the generated token to the user object

        // Check if a user with the same email already exists
        const alreadyExists = await UserSignupModel.findOne({ email });

        if (!alreadyExists) {
            // Return success response with created user data
            return res.status(201).json({
                success: true,
                message: "User Registration Successful",
                data: newUser,
                roles: newUser.role // Assuming role is a property of newUser
            });
        } else {
            // Return failure response if user already exists
            return res.status(403).json({
                success: false,
                message: "User Already Exists"
            });
        }
    } catch (error) {
        // Handle any internal server errors
        console.error("Error in user signup:", error.message);
        return res.status(500).json({
            success: false,
            message: "Internal Server Error"
        });
    }
};

module.exports = { UserSignup };
