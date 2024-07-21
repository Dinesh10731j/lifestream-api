const ScheduleModel = require("../model/scheduledonation.model");

const sendEmail = require("../services/nodemailer");





const ScheduleDonation = async (req, res) => {

  try {
    const {
      fullName,
      email,
      phoneNumber,
      donationType,
      date,
      time,
      locationType,
      address,
      recentIllness,
      medication,
      chronicDiseases,
      previousDonationDate,
      notes,
      recentTravel,
      bloodQuantity,
      bloodGroup,
    } = req.body;


console.log('This is email',email);

    sendEmail(
      email,
      "Blood Donation Scheduled",
      `Dear,${fullName} you has scheduled a blood donation on ${date}. Please check your dashboard for details.https://lifeestream.netlify.app`
    );

    const donorSchedule = await ScheduleModel.create({
      fullName,
    email,
      phoneNumber,
      donationType,
      date,
      time,
      locationType,
      address,
      recentIllness,
      medication,
      chronicDiseases,
      previousDonationDate,
      notes,
      recentTravel,
      bloodQuantity,
      bloodGroup,
    });

    res.status(201).send({
      msg: "Schedule created Successfully",
      data: donorSchedule,
      success: true,
    });
  } catch (error) {
  
    res.status(500).send({ msg: "Internal server error", success: false });
  }
};

module.exports = ScheduleDonation;
