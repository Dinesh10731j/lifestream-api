const RequestModel = require("../model/requestblood.model");
const acceptRequest = async (req, res) => {
  try {
    const { requestId } = req.params;

    if (!requestId) {
      return res.status(400).json({ msg: "RequestId is missing" });
    }

    const updatedRequest = await RequestModel.findByIdAndUpdate(
      requestId,
      { status: "Accepted" },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ msg: "Request not found", success: false });
    }

    res.status(204).json({ msg: "Status updated successfully", success: true });
  } catch (err) {
    res
      .status(500)
      .json({
        msg: "Internal server error",
        success: false,
        error: err?.message,
      });
  }
};

module.exports = acceptRequest;
