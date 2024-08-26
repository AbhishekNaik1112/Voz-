import express, { Request, Response } from "express";
import db from "./models/sql/sequelize";
import connectMongoDB from "./config/nosql-config";
import userRoutes from "./routes/userRoutes";
import cors from "cors";
var cookieParser = require("cookie-parser");
import logger from "./config/logger";
import dotenv from "dotenv";
dotenv.config();

const PORT = process.env.MONGO_PORT || 3151;

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: ["http://localhost:3000","https://voz-engine.vercel.app/"], credentials: true }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api", userRoutes);

connectMongoDB();

(async () => {
  try {
    await db.sequelize.sync();
    logger.info("MySQL database synchronized");
    app.listen(PORT, () => {
      logger.info(`Server started on port ${PORT}`);
    });
  } catch (error) {
    logger.error("Error synchronizing the database:", error);
  }
})();
