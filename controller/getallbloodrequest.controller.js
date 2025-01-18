const RequestModel = require("../model/requestblood.model");
const client = require("../utils/connectRedis");

const GetAllBloodRequest = async (req, res) => {
  const { email } = req.params;

  try {
    const cachedKey = `blood_requests:${email}`;

    // Check if the data exists in Redis cache
    const cachedRequests = await client.get(cachedKey);

    if (cachedRequests) {
      // If data is found in cache, then simply return
      return res.status(200).json({
        message: "Blood request history fetched successfully (from cache)",
        data: JSON.parse(cachedRequests), // Parse cached string back to JSON
        success: true,
      });
    }

    // Fetch data from the database if not in cache
    const requestedBloodHistory = await RequestModel.find({ email });

    if (requestedBloodHistory && requestedBloodHistory.length > 0) {
      // Cache the data in Redis for future requests
      await client.set(cachedKey, JSON.stringify(requestedBloodHistory), {
        EX: 3600, // Set cache expiration time to 1 hour
      });

      return res.status(200).send({
        msg: "Blood request history fetched successfully (from DB)",
        data: requestedBloodHistory,
        success: true,
      });
    }

    // If no data is found in the database
    return res.status(404).send({
      msg: "Blood request history not found",
      success: false,
    });
  } catch (err) {
    console.error("Error fetching blood request history:", err.message);

    return res.status(500).send({
      msg: "Internal server error",
      success: false,
    });
  }
};

module.exports = GetAllBloodRequest;
