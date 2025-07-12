const mongoose=require('mongoose')

const transactionSchema = new mongoose.Schema({
  order: { type: mongoose.Schema.Types.ObjectId, ref: "Order" },
  paymentId: String,
  method: String,
  amount: Number,
  status: String,
  paidAt: Date
});

module.exports = mongoose.model("Transaction", transactionSchema);