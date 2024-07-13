const ScheduleModel = require("../model/scheduledonation.model");

const UpdatePersonalInfo = async (req, res) => {
  try {
    const { useremail} = req.params; 
    const { email, phoneNumber, fullName } = req.body; 

    const updatedInfo = await ScheduleModel.updateMany(
      { useremail }, // Find the user by current email
      { email: email, phoneNumber, fullName }, // Update to new email and other fields
      { new: true, runValidators: true } // Options: return updated document, run validators
    );
    if (!updatedInfo) {
      return res.status(404).send({ msg: "User not found", success: false });
    }

    return res.status(200).send({ data: updatedInfo, success: true });
  } catch (err) {
    
    return res.status(500).send({ msg: "Internal server error", success: false });
  }
};

module.exports = { UpdatePersonalInfo };
