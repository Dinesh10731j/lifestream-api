
const ScheduleDonation = require("../model/scheduledonation.model");
const Donordonationstats = async (req,res)=>{
    try {
    const {donorId} = req.params;
        const donationStats = await ScheduleDonation.aggregate([
          { $match: { donorId: donorId } },
          {
            $group: {
              _id: "$donorId",
              totalDonations: { $sum: 1 },
              totalAmount: { $sum: "$amount" }, // Assuming there is an 'amount' field
              lastDonationDate: { $max: "$donationDate" }, // Assuming there is a 'donationDate' field
            },
          },
        ]);
    
        // If no donations found for the donor
        if (donationStats.length === 0) {
          return { message: "No donations found for this donor." };
        }
    
        return donationStats[0];
      } catch (error) {
        console.error(error);
        throw new Error("Failed to fetch donor donation statistics.");
      }
    };
    


    module.exports = Donordonationstats;

