const mongoose = require('mongoose');

const ScheduledonationSchema = new mongoose.Schema({

  
  fullName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  donationType: {
    type: String,
    required: true
  },
  locationType: {
    type: String,
    required: true
  },
  medication: {
    type: String,
    required: true
  },
  notes: {
    type: String,
    required: true
  },
  chronicDiseases: {
    type: String,
    required: true
  },
  recentIllness: {
    type: Boolean,
   
  },
  recentTravel: {
    type: Boolean,
   
  },

  status:{
    type:String,
    enum:['Pending','Completed'],
    default:'Pending'
  },
  previousDonationDate: {
    type: Date,
    required: true
  },
  bloodQuantity:{
    type:String,
    required:true,


  },
  bloodGroup:{
    type:String,
    required:true,

  },

  todayDate:{
    type:Date,
    default:Date.now(),

  },

  

  



},{timestamps:true});

const ScheduleModel = mongoose.model('Scheduledonation', ScheduledonationSchema);

module.exports = ScheduleModel;
