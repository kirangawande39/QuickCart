// ✅ 3. Order Schema - Order placed by buyer

const mongoose=require('mongoose');

const orderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  items: [
    {
      product: { type: mongoose.Schema.Types.ObjectId, ref: "Product" },
      quantity: Number,
      price: Number
    }
  ],
  totalAmount: Number,
  paymentMethod: String,
  shippingAddress: String,
  status: { type: String, enum: ["Pending", "Shipped", "Delivered"], default: "Pending" },
  orderedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model("Order", orderSchema);