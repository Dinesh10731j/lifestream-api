const mongoose = require("mongoose");
const RequestSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Usersignup",
    },
    fullName: {
      type: String,
      required: [true, "fullname is required"],
    },

    urgency: {
      type: String,
      required: [true, "urgency is required"],
    },
    email: {
      type: String,

      required: [true, "email is required"],
    },

    quantity: {
      type: String,
      required: [true, "blood quantity is required"],
    },

    message: {
      type: String,
    },
    bloodGroup: {
      type: String,
      required: [true, "Blood group is required"],
    },

    status: {
      type: String,
      default: "Pending",
    },

    requestdate: {
      type: Date,
      default: Date.now(),
    },
  },
  { timestamps: true }
);

const RequestModel = mongoose.model("Bloodrequest", RequestSchema);

module.exports = RequestModel;
