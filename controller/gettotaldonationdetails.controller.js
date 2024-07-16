const ScheduleModel = require("../model/scheduledonation.model");

const GetTotalDonationdetails = async (req, res) => {
    try {
        let totaldonation = 0;

        const totaldonordonation = await ScheduleModel.find({});

        
        totaldonordonation.forEach(donation => {
            if (donation.status === 'Completed') {
                totaldonation++;
            }
        });

        totaldonordonation.forEach(donation => {
            donation._doc.total = totaldonation; // _doc is used to directly modify the document's data
        });

        

        res.status(200).send({ data: totaldonordonation, success: true });

    } catch (err) {
       
        res.status(500).send({ msg: "Internal server error", success: false });
    }
};

module.exports = GetTotalDonationdetails;
