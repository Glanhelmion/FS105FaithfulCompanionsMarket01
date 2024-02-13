import mongoose from "mongoose";

// Define a schema for reviews
const reviewSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  
  rating: {
    type: Number,
    required: true,
  },
  comment: {
    type: String,
    required: true,
  },
}, {
  timestamps: true, // Enable timestamps
});

// Define the main petfood schema
const petfoodSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User", // Reference to the User model
    required: true,
  },
  sn: {
    type: Number,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
    type: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
   species: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  // Reference the review schema for reviews
  reviews: [reviewSchema],
  rating: {
    type: Number,
    required: true,
    default: 0,
  },
  numReviews: {
    type: Number,
    required: true,
    default: 0,
  },
  price: {
    type: Number,
    required: true,
    default: 0,
  },
  availability: {
    type: Number,
    required: true,
    default: 0,
  },
}, {
  timestamps: true, // Enable timestamps
  collection: 'Petfood',
});

const Petfood = mongoose.model("Petfood", petfoodSchema);

export default Petfood;
