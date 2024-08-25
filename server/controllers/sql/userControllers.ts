require("dotenv").config();
import { Request, Response } from "express";
import db from "../../models/sql/sequelize";
import bcryptjs from "bcryptjs";
import logger from "../../config/logger";
import { performance } from "perf_hooks";
const saltRounds = parseInt(process.env.SALT_ROUNDS as string, 10);

export const createUserOrSignin = async (req: Request, res: Response) => {
  const startTime = performance.now();
  try {
    const { username, email, password, role } = req.body;
    // logger.info(username);
    // logger.info(email);
    // logger.info(password);
    // logger.info(role);
    if (!username || !email || !password) {
      return res
        .status(400)
        .json({ error: "Username, email, and password are required." });
    }
    const existingUser = await db.models.User.findOne({ where: { email } });
    if (existingUser) {
      const isMatch = await bcryptjs.compare(password, existingUser.password);
      if (!isMatch) {
        logger.info(`Invalid password attempt for user: ${email}`);
        const endTime = performance.now();
        logger.info(
          `Response time for invalid password: ${endTime - startTime}ms`
        );
        return res.status(401).json({ error: "Invalid password." });
      }
      logger.info(`User signed in successfully: ${email}`);
      const endTime = performance.now();
      logger.info(
        `Response time for successful login: ${endTime - startTime}ms`
      );
      return res.status(200).json(existingUser);
    }
    const hashedPassword = await bcryptjs.hash(password, saltRounds);
    // logger.info(process.env.SALT_ROUNDS as string);
    // logger.info(saltRounds);
    const newUser = await db.models.User.create({
      username,
      email,
      password: hashedPassword,
      role,
    });
    logger.info(`New user created successfully: ${email}`);
    const endTime = performance.now();
    logger.info(`Response time for user creation: ${endTime - startTime}ms`);
    return res.status(201).json(newUser);
  } catch (error) {
    logger.error("Error in createUserOrSignin controller:", error);
    const endTime = performance.now();
    logger.info(`Response time for error: ${endTime - startTime}ms`);
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
