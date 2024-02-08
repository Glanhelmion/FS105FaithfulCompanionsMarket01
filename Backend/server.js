import express from "express";
import connectDB from "./dbconfig.js";
import cors from "cors";
import authRoutes from "./routes/auth.js";// Import the auth routes
import dotenv from "dotenv";

const app = express();


dotenv.config(); //to connect and pull data from .env
connectDB(); // Establish database connection to MongoDB

app.use(express.json());
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(cors());


// Use the authentication routes
app.use('/api/auth', authRoutes);

// Start the server
app.listen(5000, () => {
  console.log("Port 5000 connected");
});
// Below is Ritchie's code for "Start the server"
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
