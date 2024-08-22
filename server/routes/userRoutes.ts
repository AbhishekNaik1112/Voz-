import express, { Router } from "express";
import {
  createUserOrSignin,
  getUsers,
  deleteUser,
} from "../controllers/sql/userControllers";

const router: Router = express.Router();

// Create User or Signin
router.post("/users", createUserOrSignin);

// Get Users
router.get("/users", getUsers);

// Delete User
router.delete("/users/:id", deleteUser);

export default router;
