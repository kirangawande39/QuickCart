// ✅ 1. User Schema - Buyer, Seller, Admin
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, required: true, unique: true },
  password: String, // Hashed password
  role: { type: String, enum: ["buyer", "seller", "admin"], default: "buyer" },
  isVerified: { type: Boolean, default: false },
  profileImage: String,
  createdAt: { type: Date, default: Date.now }
});

module.exports=mongoose.model('User',userSchema);


