require("dotenv").config();

const PORT = process.env.PORT || 3000; 
const express = require("express");
const connectMongoDB = require("./config/nosql-config");
const { sequelize } = require("./models/sql/sequelize"); 

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

connectMongoDB();

(async () => {
  try {
    await sequelize.sync(); // Sync Sequelize models
    console.log("MySQL database synchronized");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
})();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
