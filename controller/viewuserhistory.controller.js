const RequestModel = require("../model/requestblood.model");
const decodeEmail = require("js-base64")

const ViewUserHistory = async (req, res) => {
  try {
    const { email } = req.params;
    const decodedEmail = decodeEmail.decode(email)

    const Userhistory = await RequestModel.find({ email: decodedEmail });

    if (!Userhistory || Userhistory.length === 0) {
      return res.status(404).send({ msg: 'User history not found', success: false });
    }

    return res.status(200).send({ msg: 'History fetched successfully', data: Userhistory, success: true });
  } catch (err) {
  
    res.status(500).send({ msg: 'Internal server error', success: false, error: err.message });
  }
};

module.exports = ViewUserHistory;
