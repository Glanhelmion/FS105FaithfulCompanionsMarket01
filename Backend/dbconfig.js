import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`MongoDB Connected: ${conn.connection.host}`);
  } catch (err) {
    console.error(`Error: ${err.message}`);
    process.exit(1);
  }
};

export default connectDB;

// MongoDB connection
//mongodb+srv://KKK:DEaRVEBYkg6MXaSr@kkk.ki4f1ah.mongodb.net/ <= Ritchie's code for his database
