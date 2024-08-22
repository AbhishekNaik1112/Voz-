import express, { Request, Response } from "express";
import { Router } from "express";
import db from "../models/sql/sequelize";
import bcrypt from "bcrypt";
import { Op } from "sequelize";

const router: Router = express.Router();

// Create User
router.post("/users", async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;
    console.log(username, email, password, role);
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Username, email, and password are required." });
    }

    // Check if user already exists
    const existingUser = await db.models.User.findOne({
      where: {
        [Op.or]: [{ username }, { email }],
      },
    });

    if (existingUser) {
      return res
        .status(409)
        .json({ error: "User with this username or email already exists." });
    }

    const hashedPassword = await bcrypt.hash(
      password,
      parseInt(process.env.SALT_ROUNDS || "10", 10)
    );

    const newUser = await db.models.User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.error("Error creating user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while creating the user." });
  }
});

// Get Users
router.get("/users", async (req: Request, res: Response) => {
  try {
    const users = await db.models.User.findAll();
    res.status(200).json(users);
  } catch (error) {
    console.error("Error fetching users:", error);
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
});

// Delete User
router.delete("/users/:id", async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await db.models.User.destroy({ where: { id } });

    if (user) {
      res.status(200).json({ message: "User deleted successfully." });
    } else {
      res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    console.error("Error deleting user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user." });
  }
});

export default router;
