require("dotenv").config();

const PORT = process.env.PORT || 3000;
const express = require("express");
const connectMongoDB = require("./config/nosql-config");
const { sequelize } = require("./models/sql/sequelize");
const userRoutes = require("./routes/userRoutes");
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api", userRoutes);

connectMongoDB();

(async () => {
  try {
    await sequelize.sync();
    console.log("MySQL database synchronized");
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
})();

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
