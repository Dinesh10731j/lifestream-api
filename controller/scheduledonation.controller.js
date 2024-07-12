const ScheduleDonation = async (req, res) => {

    try{
        const {
            fullName,
            email,
            phoneNumber,
            donationType,
            data,
            time,
            locationType,
            address,
            recentIllness,
            medication,
            chronicDiseases,
            previousDonationDate,
            notes
          } = await req.body;




    }catch(error){

        res.status(500).send({msg:"Internal server error",success:false});
    }
  
};


module.exports =ScheduleDonation;