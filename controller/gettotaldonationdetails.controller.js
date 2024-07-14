const ScheduleModel = require("../model/scheduledonation.model");

const GetTotalDonationdetails = async (req, res) => {
    try {
        let totaldonation = 0;

        // Fetch all donation data
        const totaldonordonation = await ScheduleModel.find({});

        // Iterate through each donation and check status
        totaldonordonation.forEach(donation => {
            if (donation.status === 'Completed') {
                totaldonation++;
            }
        });

        // Add the total donation count to each donation object
        totaldonordonation.forEach(donation => {
            donation._doc.total = totaldonation; // _doc is used to directly modify the document's data
        });

        console.log("Total completed donations:", totaldonation);

        // Send response with total donation count and all donation data
        res.status(200).send({ data: totaldonordonation, success: true });

    } catch (err) {
        console.error("Error:", err);
        res.status(500).send({ msg: "Internal server error", success: false });
    }
};

module.exports = GetTotalDonationdetails;
