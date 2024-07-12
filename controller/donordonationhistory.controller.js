const ScheduleModel = require('../model/scheduledonation.model');

const DonationHistory = async (req, res) => {
  try {
    const {email } = req.params;
 

    const donationhistory = await ScheduleModel.find({email });


    if (!donationhistory) {
      return res.status(404).send({ msg: "No donation found", status: false });
    }

    return res.status(200).send({ data: donationhistory, status: true });
  } catch (err) {
    console.error('Internal server error:', err); // Log the error
    res.status(500).send({ msg: "Internal server error", status: false });
  }
};

module.exports = DonationHistory;
