const dotenv = require("dotenv");
dotenv.config();
const twilio = require('twilio');
const client = twilio(process.env.accountSid, process.env.authToken);

const Twillo = (userMobileNumber) => {
  const formattedNumber = `+977${userMobileNumber.replace(/^0+/, '')}`;
  console.log(formattedNumber);

client.messages
    .create({
        body: 'A donor has scheduled a blood donation. Please check your dashboard for details.',
        from: '+15856201636',

              to: formattedNumber
    })
    .then(message => console.log('Message send successfully',message.sid))
    .catch(error => {
          console.error('Error sending message:', error);
      });

    }


module.exports = Twillo;
