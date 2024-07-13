const bcrypt = require('bcrypt');

const UserLogin = async (req, res) => {
    try {
        const { email, password } = req.body;

        // Finding the user by email
        const user = await UserSignupModel.findOne({ email });
        if (!user) {
            return res.status(400).send({ msg: 'Invalid credentials', success: false });
        }

    
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).send({ msg: 'Invalid credentials', success: false });
        }

        // Generate token
        const token = await user.generateToken();
        user.token = token;

        // Sending the response
        return res.status(200).send({ msg: "Login Successful", success: true, data: user });
    } catch (error) {
        return res.status(500).send({ msg: "Internal server error" });
    }
};

module.exports = { UserLogin };
