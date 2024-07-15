const ScheduleModel = require("../model/scheduledonation.model");

const ScheduleDonation = async (req, res) => {
    try {
        const {
            fullName,
            email,
            phoneNumber,
            donationType,
            date, // Corrected from 'data'
            time,
            locationType,
            address,
            recentIllness,
            medication,
            chronicDiseases,
            previousDonationDate,
            notes,
            recentTravel,
            bloodQuantity,
            bloodGroup

        } = req.body;



        const donorSchedule = await ScheduleModel.create({
            fullName,
            email,
            phoneNumber,
            donationType,
            date,
            time,
            locationType,
            address,
            recentIllness,
            medication,
            chronicDiseases,
            previousDonationDate,
            notes,
            recentTravel,
            bloodQuantity,
            bloodGroup
        });

        console.log("Created schedule:", donorSchedule); // Check the created schedule

        res.status(201).send({
            msg: "Schedule created Successfully",
            data: donorSchedule,
            success: true
        });
    } catch (error) {
        console.error("Error:", error); // Log the error for debugging
        res.status(500).send({ msg: "Internal server error", success: false });
    }
};

module.exports = ScheduleDonation;
