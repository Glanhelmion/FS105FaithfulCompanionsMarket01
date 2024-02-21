import express from "express";
import cookieParser from 'cookie-parser';
import connectDB from "./dbconfig.js";
import cors from "cors";
import authRoutes from "./routes/auth.js";// Import the auth routes
import { accessoryRouter, birdRouter, catRouter, dogRouter, fishRouter, petfoodRouter } from "./routes/productRouter.js";
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
//cookie parser middleware
app.use(cookieParser());
// Enable CORS
app.use(cors());


// Use the authentication routes
app.use("/api/auth", authRoutes);

// Routes
app.use("/api/accessoriespage", accessoryRouter); // Mount the accessoryRouter at /api/accessories
app.use("/api/birdpage", birdRouter); // Mount the birdRouter at /api/birds
app.use("/api/catpage", catRouter); // Mount the catRouter at /api/cats
app.use("/api/dogpage", dogRouter); // Mount the dogRouter at /api/dogs
app.use("/api/fishpage", fishRouter); // Mount the fishRouter at /api/fishes
app.use("/api/petfoodpage", petfoodRouter);

// Start the server
app.listen(5000, () => {
  console.log("Port 5000 connected");
});
// Below is Ritchie"s code for "Start the server"
// const PORT = process.env.PORT || 5000;
// app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
