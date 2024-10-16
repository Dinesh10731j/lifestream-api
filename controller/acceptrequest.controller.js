const mongoose = require("mongoose");
const RequestModel = require("../model/requestblood.model");

const acceptRequest = async (req, res) => {
  try {
    const { acceptId } = req.params;
    console.log('This is acceptId',acceptId)

    if (!acceptId) {
      return res.status(400).json({ msg: "acceptId is missing" });
    }

    if (!mongoose.isValidObjectId(acceptId)) {
      return res.status(400).json({ msg: "Invalid acceptId format" });
    }

    const updatedRequest = await RequestModel.findByIdAndUpdate(
      acceptId,
      { status: "Accepted" },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ msg: "Request not found", success: false });
    }

    res.status(200).json({ msg: "Status updated successfully", success: true });
  } catch (err) {
    res.status(500).json({
      msg: "Internal server error",
      success: false,
      error: err?.message,
    });
  }
};

module.exports = acceptRequest;
