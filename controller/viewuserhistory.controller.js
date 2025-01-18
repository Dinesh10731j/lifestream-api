const RequestModel = require("../model/requestblood.model");
const decodeEmail = require("js-base64");
const client = require("../utils/connectRedis");

const ViewUserHistory = async (req, res) => {
  try {
    const { email } = req.params;
    const decodedEmail = decodeEmail.decode(email);

    // Define a unique cache key for the user's history
    const cacheKey = `user_history:${decodedEmail}`;

    // Check if data exists in Redis cache
    const cachedHistory = await client.get(cacheKey);

    if (cachedHistory) {
      // If data is found in cache, return it
      return res.status(200).send({
        msg: "History fetched successfully (from cache)",
        data: JSON.parse(cachedHistory), // Parse the cached string back to JSON
        success: true,
      });
    }

    // If data is not in cache, fetch from the database
    const UserHistory = await RequestModel.find({ email: decodedEmail });

    if (!UserHistory || UserHistory.length === 0) {
      return res.status(404).send({ msg: "User history not found", success: false });
    }

  
    await client.set(cacheKey, JSON.stringify(UserHistory), {
      EX: 3600, // Cache expires in 1 hour
    });

    return res.status(200).send({
      msg: "History fetched successfully (from DB)",
      data: UserHistory,
      success: true,
    });
  } catch (err) {
    console.error("Error fetching user history:", err.message);
    return res.status(500).send({ msg: "Internal server error", success: false, error: err.message });
  }
};

module.exports = ViewUserHistory;
