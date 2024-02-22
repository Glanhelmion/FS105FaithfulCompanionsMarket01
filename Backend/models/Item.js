import mongoose from "mongoose";

// Define the schema for the Item collection
const itemSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
    enum: ["pets", "toys"], // Define valid category values
  },
  species: {
    type: String,
    required: true,
  },
  availability: {
    type: Number,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  numReviews: {
    type: Number,
    required: true,
  },
  imageUrl: {
    type: String,
  },
});

// Create a model for the Item schema
const Item = mongoose.model("Items", itemSchema);

export default Item;
