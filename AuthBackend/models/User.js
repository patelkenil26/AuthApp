const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
      trim: true,
    },

    lastName: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      trim: true,
    },

    password: {
      type: String,
      required: true,
    },

    accountType: {
      type: String,
      required: true,
      enum: ["Admin", "Insructor", "Student"],
    },

    active: {
      default: true,
      type: Boolean,
    },

    approved: {
      default: true,
      type: Boolean,
    },
    

    additionalDetails: {
      required: true,
      type: mongoose.Schema.Types.ObjectId,
      ref: "Profile",
    },

    token: {
      type: String,
    },

    resetPasswordExpires: {
      type: Date,
    },

    image: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("user", userSchema);
