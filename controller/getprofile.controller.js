const UserSignupModel = require("../model/signup.model");

const GetProfile = async (req, res) => {
    try {
        const { userid } = req.params;  // Extract userid from req.params
        const userprofile = await UserSignupModel.findById(userid);  // Use findById to get the user profile

        if (!userprofile) {
            return res.status(404).send({ message: "User not found" });
        }

        console.log(userprofile);
        res.status(200).send({ data: userprofile });
    } catch (error) {
        console.error(error);
        res.status(500).send({ message: "Server error" });
    }
};

module.exports = GetProfile;
