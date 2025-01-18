const ScheduleModel = require("../model/scheduledonation.model");
const client = require("../utils/connectRedis");

const getDonationStats = async (req, res) => {
  try {
    const cacheKey = "donation_stats";

    // Check if the donation stats exist in the Redis cache
    const cachedStats = await client.get(cacheKey);

    if (cachedStats) {
      // If stats are found in cache, return them
      return res.status(200).json({
        data: JSON.parse(cachedStats),
        msg: "Donation stats fetched successfully (from cache)",
        message: true,
      });
    }

    // If not in cache, fetch stats from the database
    const donationStats = await ScheduleModel.aggregate([
      {
        $group: {
          _id: '$donationType',
          total: { $sum: 1 },
        },
      },
    ]);

    // Cache the donation stats in Redis for future requests
    await client.set(cacheKey, JSON.stringify(donationStats), {
      EX: 3600, // Cache expiration time: 1 hour
    });

    return res.status(200).json({
      data: donationStats,
      msg: "Donation stats fetched successfully (from DB)",
      message: true,
    });
  } catch (error) {
    console.error("Error fetching donation stats:", error.message);

    return res.status(500).json({
      message: error.message,
      success: false,
    });
  }
};

module.exports = getDonationStats;
