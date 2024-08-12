import "dotenv/config";
import express, { Request, Response } from "express";
import db from "./models/sql/sequelize";
import connectMongoDB from "./config/nosql-config";
import userRoutes from "./routes/userRoutes";
import cors from "cors";

const PORT = process.env.MONGO_PORT || 3151;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: "*" }));

app.get("/", (req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use("/api", userRoutes);

connectMongoDB();

(async () => {
  try {
    await db.sequelize.sync();
    console.log("MySQL database synchronized");
    app.listen(PORT, () => {
      console.log(`Server started on port ${PORT}`);
    });
  } catch (error) {
    console.error("Error synchronizing the database:", error);
  }
})();
