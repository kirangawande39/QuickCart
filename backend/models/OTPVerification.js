const mongoose=require('mongoose')

const otpVerificationSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  otp: String,
  expiresAt: Date,
  verified: { type: Boolean, default: false }
});
module.exports = mongoose.model("OTPVerification", otpVerificationSchema);

