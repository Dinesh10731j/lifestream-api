const UserSignupModel = require("../model/signup.model");
const GetAlluser = async (req, res) => {
  try {
    const LifestreamUser = await UserSignupModel.find({});

    if (LifestreamUser.length === 0) {
      return res.status(400).send({ msg: "User not found !", success: false });
    }

    return res
      .status(200)
      .send({
        msg: "LifestreamUsers fetch successfully",
        data: LifestreamUser,
      });
  } catch (err) {
    res.status(500).send({ msg: "Internal server error " },err);
  }
};

module.exports = GetAlluser;
