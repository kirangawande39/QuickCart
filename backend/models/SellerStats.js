const mongoose=require('mongoose')


const sellerStatsSchema = new mongoose.Schema({
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  totalSales: Number,
  totalOrders: Number,
  topProduct: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
  lastUpdated: { type: Date, default: Date.now }
});
module.exports = mongoose.model("SellerStats", sellerStatsSchema);