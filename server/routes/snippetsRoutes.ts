import { Router } from "express";
import {
  createSnippet,
  getSnippets,
  getSnippetById,
  updateSnippet,
  deleteSnippet,
} from "../controllers/mongo/snippetsController";

const router = Router();

router.post("/", createSnippet);

router.get("/fetch", getSnippets);

router.get("/:id", getSnippetById);

router.put("/:id", updateSnippet);

router.delete("/:id", deleteSnippet);

export default router;
