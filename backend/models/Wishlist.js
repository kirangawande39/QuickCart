const mongoose=require('mongoose');


const wishlistSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  products: [{ type: mongoose.Schema.Types.ObjectId, ref: "Product" }]
});


module.exports = mongoose.model("Wishlist", wishlistSchema);