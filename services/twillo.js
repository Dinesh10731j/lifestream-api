const dotenv = require("dotenv");
dotenv.config();
const twilio = require('twilio');
const client = twilio(process.env.ACCOUNT_SID, process.env.AUTH_TOKEN);

const Twillo = (userMobileNumber) => {
  const formattedNumber = `+977${userMobileNumber.replace(/^0+/, '')}`;
  
  client.messages
    .create({
      from: '+15856201636',
      to: formattedNumber,
      body: 'A donor has scheduled a blood donation. Please check your dashboard for details.'
    })
    .then(message => {
      console.log('Message sent with SID:', message.sid);
    })
    .catch(error => {
      console.error('Error sending message:', error);
    });
};

module.exports = Twillo;
