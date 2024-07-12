

const ScheduleModel = require("../model/scheduledonation.model");
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


          console.log(notes);


          const donorSchedule = await ScheduleModel.create({fullName,
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
            notes});



          res.status(201).send({msg:"Schedule created Successfully",data:donorSchedule,success:true});


          console.log(donorSchedule);




    }catch(error){

        res.status(500).send({msg:"Internal server error",success:false});
    }
  
};


module.exports = ScheduleDonation;