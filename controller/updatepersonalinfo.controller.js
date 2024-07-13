const ScheduleModel = require("../model/scheduledonation.model");

const UpdatePersonalInfo = async (req, res) => {
  try {

    const {userid} = req.params;

    const {email,phoneNumber,fullName}= req.body;
    console.log(email,phoneNumber);
  
    console.log('This is user id ',userid);

    const updatedInfo = await ScheduleModel.findByIdAndUpdate(userid,{email,phoneNumber,fullName});
    console.log(updatedInfo)

    if (!updatedInfo) {
      return res.status(404).send({ msg: "User not found", success: false });
    }

    return res.status(200).send({ data: updatedInfo, success: true });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).send({ msg: "Internal server error", success: false });
  }
};

module.exports = {UpdatePersonalInfo};
