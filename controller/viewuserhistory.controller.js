const RequestModel = require("../model/requestblood.model");

const ViewUserHistory = async (req, res) => {
  try {
    const { email } = req.params;
    console.log("Received email:", email);

    const Userhistory = await RequestModel.find({ email: email });
    console.log("Database query result:", Userhistory);

    if (!Userhistory || Userhistory.length === 0) {
      return res.status(404).send({ msg: 'User history not found', success: false });
    }

    return res.status(200).send({ msg: 'History fetched successfully', data: Userhistory, success: true });
  } catch (err) {
    console.error("Error occurred:", err);
    res.status(500).send({ msg: 'Internal server error', success: false, error: err.message });
  }
};

module.exports = ViewUserHistory;
