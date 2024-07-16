const RequestModel = require("../model/requestblood.model");

const EditRequest = async (req, res) => {
    try {
        const { editid } = req.params;
        const editedData = req.body;

        const updatedRequest = await RequestModel.findByIdAndUpdate(editid, editedData, {
            new: true, // Returning  the updated document
            runValidators: true 
        });

        if (!updatedRequest) {
            return res.status(404).json({ msg: 'Request not found', status: false });
        }

        res.json({ message: 'Request updated successfully', data: updatedRequest, status: true });
    } catch (err) {
        res.status(500).send({ msg: 'Internal server error', error: err, status: false });
    }
}

module.exports = EditRequest;
