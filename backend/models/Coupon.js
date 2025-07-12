const mongoose=require('mongoose')

const couponSchema = new mongoose.Schema({
  code: String,
  discount: Number,
  expiresAt: Date,
  usageLimit: Number,
  minPurchase: Number
});

module.exports = mongoose.model("Coupon", couponSchema);