// cart.js

import mongoose from "mongoose";

// Define the schema for a cart item
const cartItemSchema = new mongoose.Schema({
  productId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    default: 1,
  },
});

const cartSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true,
  },
  cartItems: [cartItemSchema],
  shippingAddress: {
    type: String,
    default: "",
  },
  paymentMethod: {
    type: String,
    default: "PayPal",
  },
});
// Create a model for the Cart schema
const Cart = mongoose.model("Cart", cartSchema);

export default Cart;
