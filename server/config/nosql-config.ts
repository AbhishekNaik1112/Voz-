import dotenv from "dotenv";
import mongoose from "mongoose";

dotenv.config();

const MONGODB_URI: string = process.env.MONGO_URI as string;

const MongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("🗄️ Database connected successfully");
  } catch (error) {
    console.error("Error connecting to the database:", error);
  }
};

export default MongoDB;
