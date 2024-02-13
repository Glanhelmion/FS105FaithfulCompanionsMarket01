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

// Define the main bird schema
const birdSchema = new mongoose.Schema({
  user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: 'User',
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
  collection: 'Bird',
});

const Bird = mongoose.model("Bird", birdSchema);

export default Bird;
