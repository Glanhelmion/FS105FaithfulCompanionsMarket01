import express from "express";
import cookieParser from 'cookie-parser';
import connectDB from "./dbconfig.js";
import cors from "cors";
import authRoutes from "./routes/auth.js";
import { accessoryRouter, birdRouter, catRouter, dogRouter, fishRouter, petfoodRouter } from "./routes/productRouter.js";
import dotenv from "dotenv";

const app = express();

dotenv.config(); // Load environment variables from .env file
connectDB(); // Establish database connection to MongoDB

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/accessoriespage", accessoryRouter);
app.use("/api/birdpage", birdRouter);
app.use("/api/catpage", catRouter);
app.use("/api/dogpage", dogRouter);
app.use("/api/fishpage", fishRouter);
app.use("/api/petfoodpage", petfoodRouter);

const PORT = process.env.PORT || 5000; // Use the dynamic port provided by Vercel or default to 5000
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
