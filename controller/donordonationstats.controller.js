
const ScheduleDonation = require("../model/scheduledonation.model");
const bs64 = require("js-base64")
const Donordonationstats = async (req,res)=>{
  try {
    const { email } = req.params;
    console.log('This is after the decode email',email)
    const  decodedEmail= bs64.decode(email);
    console.log("This is decodeemail",decodedEmail)

    const donationStats = await ScheduleDonation.aggregate([
      { $match: { email: decodedEmail } },
      {
        $group: {
          _id: "$email",
          totalDonations: { $sum: 1 },
          totalAmount: { $sum: { $toInt: "$bloodQuantity" } },
          lastDonationDate: { $max: "$date" },
        },
      },
    ]);

    if (donationStats.length === 0) {
      return res.status(404).send({ msg: "No donations found for this donor." ,success:false});
    }

    res.status(200).send(donationStats[0]);
  } catch (error) {
    console.error(error);
    res.status(500).send({ msg: "Internal server error", success: false ,error:error});
  }
}
    
    


    module.exports = Donordonationstats;

