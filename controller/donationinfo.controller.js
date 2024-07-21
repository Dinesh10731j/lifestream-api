const ScheduleModel = require("../model/scheduledonation.model");

const DonationInfo = async (req, res) => {
  try {
    // Total number of donations
    const totalDonations = await ScheduleModel.countDocuments();

    // Total number of donors
    const totalDonors = await ScheduleModel.aggregate([
      {
        $group: {
          _id: "$email" // Group by email to count unique donors
        }
      },
      {
        $count: "totalDonors" // Count the number of unique donors
      }
    ]);

    res.status(200).json({
      totalDonations,
      totalDonors: totalDonors.length > 0 ? totalDonors[0].totalDonors : 0 
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = DonationInfo;
