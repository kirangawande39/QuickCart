const mongoose=require('mongoose');



const refundSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  amount: Number,
  reason: String,
  status: { type: String, enum: ["Pending", "Processed", "Rejected"], default: "Pending" },
  createdAt: { type: Date, default: Date.now }
});
module.exports = mongoose.model("Refund", refundSchema);