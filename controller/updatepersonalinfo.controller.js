const ScheduleModel = require("../model/scheduledonation.model");

const UpdatePersonalInfo = async (req, res) => {
  try {
    const { email } = req.params; // The current email to find the user
    const { newEmail, phoneNumber, fullName } = req.body; // The new email and other fields to update

    console.log('Current Email:', email);
    console.log('New Email:', newEmail, 'New Phone Number:', phoneNumber, 'New Full Name:', fullName);

    const updatedInfo = await ScheduleModel.findOneAndUpdate(
      { email }, // Find the user by current email
      { email: newEmail, phoneNumber, fullName }, // Update to new email and other fields
      { new: true, runValidators: true } // Options: return updated document, run validators
    );

    console.log('Updated Info:', updatedInfo);

    if (!updatedInfo) {
      return res.status(404).send({ msg: "User not found", success: false });
    }

    return res.status(200).send({ data: updatedInfo, success: true });
  } catch (err) {
    console.error(err); // Log the error for debugging
    return res.status(500).send({ msg: "Internal server error", success: false });
  }
};

module.exports = { UpdatePersonalInfo };
