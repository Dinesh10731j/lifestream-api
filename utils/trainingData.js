const trainingData = [
    // Admin-related queries
    { input: "How many donors are registered?", output: "Currently, there are 500 donors registered in the system." },
    { input: "Can I approve a new donor?", output: "Yes, as an admin, you can approve new donors from the admin dashboard." },
    { input: "How can I view the list of recent donations?", output: "You can view the list of recent donations in the admin panel under the 'Donations' section." },
    { input: "What is the maximum number of donors allowed?", output: "There is no fixed limit on the number of donors. You can register as many donors as needed." },
    { input: "How do I remove a donor from the list?", output: "You can remove a donor from the donor list by navigating to their profile and selecting the 'Delete' option." },
    { input: "How do I approve a blood donation request?", output: "Go to the 'Requests' section in the admin panel, and click 'Approve' next to the request." },
    { input: "Can I send a message to all donors?", output: "Yes, you can send bulk messages to all donors from the admin dashboard." },
    { input: "How do I check the availability of donors?", output: "Donor availability can be checked under the 'Availability' section in the admin panel." },
    { input: "How do I update donor details?", output: "You can update donor details by accessing their profile and editing the necessary information." },
    { input: "What information do I need to verify a donor?", output: "To verify a donor, you'll need their identification, blood type, and donation history." },
  
    // Recipient-related queries
    { input: "How can I request blood?", output: "To request blood, please fill out the blood request form on your dashboard." },
    { input: "Where can I find a nearby blood bank?", output: "You can find the nearest blood bank using our blood bank locator feature on the website." },
    { input: "Can I see the list of available blood types?", output: "You can view the available blood types in the 'Available Blood' section after logging into your recipient account." },
    { input: "What is the procedure to request blood?", output: "To request blood, fill out the request form and specify your required blood type, and the nearest donor will be contacted." },
    { input: "How do I know if my blood request is approved?", output: "You'll receive an email notification once your blood request is approved." },
    { input: "Can I get blood delivered to my home?", output: "Blood delivery to home is available in selected regions. Check your location in the blood request form to confirm." },
    { input: "What happens if I need blood urgently?", output: "In urgent situations, you can mark your request as 'Emergency' to prioritize it." },
    { input: "Can I contact the donor directly?", output: "Once your request is approved, you will be given the donor's contact information." },
    { input: "How long does it take to process a blood request?", output: "The processing time varies, but typically it takes 24-48 hours to fulfill a blood request." },
    { input: "How can I cancel my blood request?", output: "To cancel your request, go to the 'My Requests' section and click 'Cancel' on the request you wish to revoke." },
  
    // Donor-related queries
    { input: "How can I donate blood?", output: "To donate blood, register as a donor and schedule an appointment at your nearest blood donation center." },
    { input: "Where can I donate blood?", output: "You can donate blood at certified blood banks or hospitals in your area. Use our blood bank locator to find one near you." },
    { input: "How often can I donate blood?", output: "You can donate whole blood once every 56 days. Plasma and platelet donations have different guidelines." },
    { input: "Do I need to bring any documents to donate blood?", output: "Yes, bring an ID proof and your donor registration details to donate blood." },
    { input: "What blood types are needed the most?", output: "O-negative and O-positive blood types are always in high demand, but all blood types are valuable." },
    { input: "Can I donate blood if I am not feeling well?", output: "It’s not recommended to donate blood if you are feeling unwell. Please consult with a healthcare professional before donating." },
    { input: "Is there any compensation for donating blood?", output: "We do not offer monetary compensation for blood donations, but your donation helps save lives." },
    { input: "How do I know if I am eligible to donate blood?", output: "You need to meet basic health requirements such as being between 18-60 years old, weigh at least 50 kg, and be in good health." },
    { input: "What happens after I donate blood?", output: "After donating blood, you will be asked to rest and drink fluids for a while. You can return to normal activities after a short break." },
    { input: "How do I track my donation history?", output: "You can view your donation history under the 'My Donations' section in your donor dashboard." },
  
    // General inquiries
    { input: "What is Lifestream?", output: "Lifestream is a platform connecting blood donors with recipients to help save lives." },
    { input: "How do I register as a donor?", output: "You can register as a donor by filling out the registration form on the Lifestream website." },
    { input: "How do I register as a recipient?", output: "To register as a recipient, fill out the recipient registration form on the website." },
    { input: "Can I donate blood for someone else?", output: "Yes, you can donate blood on behalf of someone else as long as they are registered as a recipient." },
    { input: "Can I get updates on my donation request?", output: "Yes, you will receive email and SMS notifications regarding the status of your donation request." },
    { input: "What should I do if I lose my donation certificate?", output: "If you lose your donation certificate, contact our support team, and they will issue a new one." },
    { input: "How do I change my registered information?", output: "You can update your registration details by logging into your account and editing the information in the 'Profile' section." },
    { input: "What is the Lifestream mobile app?", output: "The Lifestream mobile app helps you track blood donations, requests, and locate nearby blood banks. It is available for download on iOS and Android." },
    { input: "Is Lifestream available worldwide?", output: "Currently, Lifestream operates in selected regions. You can check if your location is supported on the website." },
    { input: "How do I know if a donor is available?", output: "Donor availability is displayed in your dashboard once you log in as a recipient. You can also check availability when making a request." },
  
    // Expanded questions for more variation
    { input: "How do I make an emergency blood donation?", output: "You can mark your blood donation request as an emergency for priority processing." },
    { input: "Do you offer plasma donation?", output: "Yes, we also accept plasma donations. Please contact your nearest blood donation center for more details." },
    { input: "Can I donate blood if I have a medical condition?", output: "Certain medical conditions may disqualify you from donating blood. Please consult a healthcare professional." },
    { input: "How is the blood donation process carried out?", output: "The process involves registration, health screening, blood collection, and post-donation rest." },
    { input: "What should I do if I feel faint after donating blood?", output: "If you feel faint, notify the staff immediately. They will assist you and ensure your recovery." },
    { input: "How do I receive a blood donation certificate?", output: "After your blood donation, you will receive a certificate via email or SMS." },
    { input: "Can I donate blood if I’m taking medication?", output: "Some medications may prevent you from donating blood. Please consult with your doctor before donating." },
    { input: "What is the minimum age for blood donation?", output: "You must be at least 18 years old to donate blood." },
    { input: "How do I get in touch with a blood donation center?", output: "You can find contact details of nearby blood donation centers using our blood bank locator." },
    { input: "Can I donate blood if I’ve had surgery?", output: "You may need to wait a certain period after surgery before donating blood. Please consult with a healthcare professional." }
  ];
  

  module.exports = trainingData;
  