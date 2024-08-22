require("dotenv").config();
import { Request, Response } from "express";
import db from "../../models/sql/sequelize";
import bcrypt from "bcrypt";
import logger from "../../config/logger";

export const createUserOrSignin = async (req: Request, res: Response) => {
  try {
    const { username, email, password, role } = req.body;
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Username, email, and password are required." });
    }
    const existingUser = await db.models.User.findOne({ where: { email } });
    if (existingUser) {
      const isMatch = await bcrypt.compare(password, existingUser.password);
      if (!isMatch) {
        logger.info(`Invalid password attempt for user: ${email}`);
        return res.status(401).json({ error: "Invalid password." });
      }
      logger.info(`User signed in successfully: ${email}`);
      return res.status(200).json(existingUser);
    }
    const hashedPassword = await bcrypt.hash(
      password,
      Number(process.env.SALT_ROUNDS) || 3
    );
    const newUser = await db.models.User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });
    logger.info(`New user created successfully: ${email}`);
    return res.status(201).json(newUser);
  } catch (error) {
    logger.error("Error in createUserOrSignin controller:", error);
    res.status(500).json({ error: "An error occurred during the operation." });
  }
};

export const getUsers = async (req: Request, res: Response) => {
  try {
    const users = await db.models.User.findAll();
    logger.info("Fetched users successfully.");
    res.status(200).json(users);
  } catch (error) {
    logger.error("Error fetching users:", error);
    res.status(500).json({ error: "An error occurred while fetching users." });
  }
};

export const deleteUser = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const user = await db.models.User.destroy({ where: { id } });

    if (user) {
      logger.info(`User deleted successfully: ${id}`);
      res.status(200).json({ message: "User deleted successfully." });
    } else {
      logger.warn(`User not found: ${id}`);
      res.status(404).json({ error: "User not found." });
    }
  } catch (error) {
    logger.error("Error deleting user:", error);
    res
      .status(500)
      .json({ error: "An error occurred while deleting the user." });
  }
};
