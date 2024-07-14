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

        console.log("Total completed donations:", totaldonation);

        // Structure the response to include total donation count in an array
        const responseArray = [
            { totaldonation: totaldonation },
            ...totaldonordonation
        ];

        // Send response with total donation count and all donation data
        res.status(200).send({ data: responseArray, success: true });

    } catch (err) {
        console.error("Error:", err);
        res.status(500).send({ msg: "Internal server error", success: false });
    }
};

module.exports = GetTotalDonationdetails;
