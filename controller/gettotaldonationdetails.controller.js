const ScheduleModel = require("../model/scheduledonation.model");
const client = require("../utils/connectRedis");

const GetTotalDonationdetails = async (req, res) => {
  try {
    const cacheKey = "total_donation_details";

    // Check if data exists in Redis cache
    const cachedData = await client.get(cacheKey);

    if (cachedData) {
      // If data is found in cache, return it
      return res.status(200).send({
        data: JSON.parse(cachedData),
        success: true,
        message: "Donation details fetched successfully (from cache)",
      });
    }

    let totaldonation = 0;

    // Fetch data from the database
    const totalDonorDonations = await ScheduleModel.find({});

    // Calculate total donations with status 'Completed'
    totalDonorDonations.forEach((donation) => {
      if (donation.status === "Completed") {
        totaldonation++;
      }
    });

    // Add total donation count to each donation document
    totalDonorDonations.forEach((donation) => {
      donation._doc.total = totaldonation; // 
    });

    // Cache the result in Redis for future requests
    await client.set(cacheKey, JSON.stringify(totalDonorDonations), {
      EX: 3600, // Cache expiration time: 1 hour
    });

    return res.status(200).send({
      data: totalDonorDonations,
      success: true,
      message: "Donation details fetched successfully (from DB)",
    });
  } catch (err) {
    console.error("Error fetching donation details:", err.message);

    return res.status(500).send({
      msg: "Internal server error",
      success: false,
    });
  }
};

module.exports = GetTotalDonationdetails;
