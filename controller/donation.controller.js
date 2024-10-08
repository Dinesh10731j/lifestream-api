const ScheduleModel = require("../model/scheduledonation.model");

const getDonationStats = async (req, res) => {
  try {
    const donationStats = await ScheduleModel.aggregate([
      {
        $group: {
          _id: '$donationType',
          total: { $sum: 1 }
        }
      }
    ]);
    



    res.status(200).json({data:donationStats,msg:'Donation stats fetch successfully',message:true});
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports =  getDonationStats ;
