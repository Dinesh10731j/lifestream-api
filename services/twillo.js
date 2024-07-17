const twillFun = () => {
    console.log('Sending message from:', '+15856201636');
    console.log('Sending message to:', '+9779817161246');
  
    client.messages
      .create({
        from: '+15856201636',
        to: '+9779817161246',
        body: 'A donor has scheduled a blood donation. Please check your dashboard for details.'
      })
      .then(message => console.log('Message sent with SID:', message.sid))
      .catch(error => console.error('Error sending message:', error));
  };
  
  twillFun();
  