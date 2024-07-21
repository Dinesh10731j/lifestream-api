const ScheduleModel = require("../models/schedule.model");

const getDonationStats = async (req, res) => {
  try {
    // Fetch all the donation records
    const donations = await ScheduleModel.find({});

    // Initialize an object to count occurrences of each donation type
    const donationCount = {
      Platelets: 0,
      WholeBlood: 0,
      Plasma: 0
    };

    // Count the occurrences of each donation type
    donations.forEach(donation => {
      if (donation.donationType in donationCount) {
        donationCount[donation.donationType]++;
      }
    });

    const donationStats = Object.entries(donationCount).map(([type, count]) => ({
      _id: type,
      total: count
    }));

    console.log("This is for debugging", donationStats);

    res.status(200).json({ data: donationStats, msg: 'Donation stats fetched successfully', success: true });
  } catch (error) {
    console.error("Error fetching donation stats:", error); 
    res.status(500).json({ message: 'Internal server error', error: error.message });
  }
};

module.exports = getDonationStats;
