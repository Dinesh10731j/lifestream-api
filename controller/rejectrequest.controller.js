const RequestModel = require("../model/requestblood.model");
const rejectRequest = async (req, res) => {
  try {
    const { rejectId } = req.params;

    if (!rejectId) {
      return res
        .status(400)
        .json({ msg: "RejectId is missing", success: false });
    }

    const updatedRequest = await RequestModel.findByIdAndUpdate(
      rejectId,
      { status: "Rejected" },
      { new: true }
    );

    if (!updatedRequest) {
      return res.status(404).json({ msg: "Request not found", success: false });
    }

    res.status(204).json({ msg: "Status updated successfully", success: true });
  } catch (err) {
    res.status(500).json({
      msg: "Internal server error",
      success: false,
      error: err?.message,
    });
  }
};


module.exports = rejectRequest;