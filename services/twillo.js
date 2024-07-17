const accountSid = 'AC67939058e34ff3f3d28f6e89dc4c34b4';
const authToken = 'd58842dd2ee226929b61dc77a6570b50';
const client = require('twilio')(accountSid, authToken);

const  twillFun =()=>{
    client.messages
    .create({
                from: '+15856201636',
        to: '+9779817161246'
    })
    .then(message => console.log(message.sid))
    .done();

}



twillFun();
