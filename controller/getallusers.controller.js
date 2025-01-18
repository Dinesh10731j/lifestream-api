const UserSignupModel = require("../model/signup.model");
const client = require("../utils/connectRedis");

const GetAllUser = async (req, res) => {
  try {
 
    const cachedUsers = await client.get("all_users");

    if (cachedUsers) {
    
      return res.status(200).send({
        msg: "LifestreamUsers fetched successfully (from cache)",
        data: JSON.parse(cachedUsers), 
      });
    }


    const LifestreamUser = await UserSignupModel.find({});

    if (LifestreamUser.length === 0) {
      return res.status(400).send({ msg: "User not found!", success: false });
    }


    await client.set("all_users", JSON.stringify(LifestreamUser), {
      EX: 3600,
    });

    return res.status(200).send({
      msg: "LifestreamUsers fetched successfully (from DB)",
      data: LifestreamUser,
    });
  } catch (err) {
    console.error("Error fetching users:", err.message);
    return res.status(500).send({ msg: "Internal server error", err });
  }
};

module.exports = GetAllUser;
