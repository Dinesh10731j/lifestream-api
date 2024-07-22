
const ScheduleDonation = require("../model/scheduledonation.model");
const base64 = require("js-base64")
const Donordonationstats = async (req,res)=>{
  try {
    const {encodedEmail} = req.params;
    console.log('This is before the decode email',encodedEmail)
    const  decodedEmail= base64.decode(encodedEmail);
    console.log("This is after email is  decodeemail",decodedEmail)

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
    res.status(500).send({ msg: "Internal server error", success: false },error);
  }
}
    
    


    module.exports = Donordonationstats;
