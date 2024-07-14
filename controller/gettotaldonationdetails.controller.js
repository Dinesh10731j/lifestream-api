const ScheduleModel = require("../model/scheduledonation.model");

const GetTotalDonationdetails = async (req, res) => {
    try {
        let totaldonation = 0;

        const totaldonordonation = await ScheduleModel.find({});

        
        totaldonordonation.forEach(donation => {
            if (donation.status === 'Completed') {
                totaldonation++;
            }else{
                totaldonation = 0;
            }
        });

        totaldonordonation.forEach(donation => {
            donation._doc.total = totaldonation; // _doc is used to directly modify the document's data
        });

        console.log("Total completed donations:", totaldonation);

        res.status(200).send({ data: totaldonordonation, success: true });

    } catch (err) {
        console.error("Error:", err);
        res.status(500).send({ msg: "Internal server error", success: false });
    }
};

module.exports = GetTotalDonationdetails;
