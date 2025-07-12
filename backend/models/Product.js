// ✅ 2. Product Schema - Product details by seller

const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  seller: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  name: String,
  description: String,
  price: Number,
  category: String,
  images: [String],
  stock: Number,
  isActive: { type: Boolean, default: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports=mongoose.model('Product',productSchema);