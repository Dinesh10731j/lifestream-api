const express = require("express");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cors = require("cors");
dotenv.config();

const SignupRoutes = require("./routes/signup.routes");
const LoginRoutes = require("./routes/login.routes");
const GetProfileRoutes = require("./routes/getprofile.routes");
const DonationScheduleRoutes = require("./routes/scheduledonation.routes");
const DonordonationhistoryRoutes = require("./routes/donationhistory.routes");
const PersonalInfoRoutes = require("./routes/updatepersonalinfo.routes");
const GetTotalDonationdetailsRoutes = require("./routes/gettotaldonationdetails.routes");
const BloodRequestRoutes = require("./routes/bloodrequest.routes");
const BloodRequestHistoryRoute = require("./routes/getallbloodrequesthistory.routes");
const ManageBloodrequestRoute = require("./routes/managebloodrequest.routes");
const DeleteRequestRoute = require("./routes/deleterequest.routes");
const RequestEditRoute = require("./routes/editrequest.routes");
const GetAlluserRoute = require("./routes/getallusers.routes");
const  UserRoleChangeRoute=require("./routes/changerole.routes");
const RemoveUserRoute = require("./routes/removeuser.routes");
const ViewUserHistoryRoute = require("./routes/viewuserhistory.routes");
const DonationStatsRoutes =  require("./routes/donationstats.routes");
const DonationInfoRouter = require("./routes/donationinfo.routes");
const DonordonationStatsRoutes = require("./routes/donordonationstats.routes");
const acceptRequestRoute = require('./routes/acceptrequest.routes');
const rejectRequestRoute = require("./routes/rejectrequest.routes");
const chatRouter = require("./routes/chat.routes");
const receiptantOverViewRoute = require("./routes/receiptantoverview.routes");
const removeAccountRoute = require("./routes/removeaccount.routes")
const Connectdb = require("./utils/dbconn");
const server = express();
const port = process.env.PORT || 7000;

server.use(express.json());
server.use(morgan("combined"));
server.use(cors());
server.use("/api", SignupRoutes);
server.use("/api", LoginRoutes);
server.use("/api", GetProfileRoutes);
server.use("/api", DonationScheduleRoutes);
server.use("/api", DonordonationhistoryRoutes);
server.use("/api", PersonalInfoRoutes);
server.use("/api", GetTotalDonationdetailsRoutes);
server.use("/api", BloodRequestRoutes);
server.use("/api", BloodRequestHistoryRoute);
server.use("/api", ManageBloodrequestRoute);
server.use("/api", DeleteRequestRoute);
server.use("/api", RequestEditRoute);
server.use("/api", GetAlluserRoute);
server.use("/api", UserRoleChangeRoute);
server.use("/api", RemoveUserRoute);
server.use("/api",ViewUserHistoryRoute);
server.use("/api",DonationStatsRoutes);
server.use("/api",DonationInfoRouter);
server.use("/api",DonordonationStatsRoutes);
server.use("/api",acceptRequestRoute);
server.use("/api",rejectRequestRoute);
server.use("/api",chatRouter);
server.use("/api",receiptantOverViewRoute);
server.use("/api",removeAccountRoute)
Connectdb().then(() => {
  server.listen(port, () => {
    console.log(`Listening to port ${port}`);
  });
});
