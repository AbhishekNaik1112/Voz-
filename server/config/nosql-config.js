require("dotenv").config();

const mongoose = require("mongoose");
const MONGODB_URI = process.env.MONGO_URI;

const MongoDB = async () => {
  try {
    await mongoose.connect(MONGODB_URI);
    console.log("🗄️ Database connected successfully");
  } catch (error) {
    console.log(error);
  }
};

module.exports = MongoDB;
