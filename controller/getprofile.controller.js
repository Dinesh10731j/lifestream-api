const UserSignupModel = require("../model/signup.model");
const client = require("../utils/connectRedis");

const GetProfile = async (req, res) => {
  try {
    const { userid } = req.params;
    const cacheKey = `user_profile:${userid}`;

    // Check if the user profile exists in Redis cache
    const cachedProfile = await client.get(cacheKey);

    if (cachedProfile) {
      // If the profile is found in cache, return it
      return res.status(200).send({
        data: JSON.parse(cachedProfile),
        status: true,
        message: "User profile fetched successfully (from cache)",
      });
    }

    // If not found in cache, fetch from the database
    const userProfile = await UserSignupModel.findById(userid);

    if (!userProfile) {
      return res.status(404).send({
        message: "User profile not found",
        status: false,
      });
    }

    // Cache the user profile in Redis for future requests
    await client.set(cacheKey, JSON.stringify(userProfile), {
      EX: 3600, // Cache expiration time: 1 hour
    });

    return res.status(200).send({
      data: userProfile,
      status: true,
      message: "User profile fetched successfully (from DB)",
    });
  } catch (error) {
    console.error("Error fetching user profile:", error.message);

    return res.status(500).send({
      message: "Internal server error",
      success: false,
    });
  }
};

module.exports = GetProfile;
