const ScheduleModel = require('../model/scheduledonation.model');
const base64 = require("js-base64")

const DonationHistory = async (req, res) => {
  try {
    const {email} = req.params;
    console.log("This is beforre the encryption",email)
    const decodedemail = base64.decode(email);

    console.log("This is after the decode",decodedemail)

    
 

    const donationhistory = await ScheduleModel.find({decodedemail});


    if (!donationhistory) {
      return res.status(404).send({ msg: "No donation found", status: false });
    }

    return res.status(200).send({ data: donationhistory, status: true });
  } catch (err) {

    res.status(500).send({ msg: "Internal server error", status: false });
  }
};

module.exports = DonationHistory;
