import { Request, Response } from "express";
import CodeSnippet from "../../models/mongo/codeSnippets";
import logger from "../../config/logger";
import { performance } from "perf_hooks";

export const createSnippet = async (req: Request, res: Response) => {
  const startTime = performance.now();
  try {
    const { title, language, code, description, name, email } = req.body;
    const startTimeTime = performance.now();
    logger.info("Received snippet data", {
      title,
      language,
      code,
      description,
      name,
      email,
    });

    if (!title || !language || !description || !name || !email) {
      logger.warn("Missing required fields", { body: req.body });
      return res.status(400).json({ message: "Missing required fields" });
    }

    const newSnippet = new CodeSnippet({
      title,
      language,
      code,
      description,
      name,
      email,
    });

    await newSnippet.save();
    res
      .status(201)
      .json({ message: "Snippet created successfully", snippet: newSnippet });
    const endTime = performance.now();
    logger.info(`Response time for snippet creation: ${endTime - startTime}ms`);
  } catch (error) {
    logger.error("Error creating snippet", { error });
    res.status(500).json({ message: "Error creating snippet", error: error });
  }
};

// Get all code snippets
export const getSnippets = async (req: Request, res: Response) => {
  const startTime = performance.now();
  try {
    const snippets = await CodeSnippet.find();
    logger.info("Fetched all snippets", { snippets });
    res.status(200).json(snippets);
    const endTime = performance.now();
    logger.info(`Response time for snippet fetching: ${endTime - startTime}ms`);
  } catch (error) {
    logger.error("Error fetching snippets", { error });
    res.status(500).json({ message: "Error fetching snippets" });
  }
};

// Get a specific code snippet by ID
export const getSnippetById = async (req: Request, res: Response) => {
  const startTime = performance.now();
  try {
    const { id } = req.params;
    const snippet = await CodeSnippet.findById(id);

    if (!snippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    logger.info("Fetched snippet by ID", { snippet });
    res.status(200).json(snippet);
    const endTime = performance.now();
    logger.info(
      `Response time for snippet fetching by id: ${endTime - startTime}ms`,
    );
  } catch (error) {
    logger.error("Error fetching snippet", { error });
    res.status(500).json({ message: "Error fetching snippet" });
  }
};

// Update a code snippet by ID
export const updateSnippet = async (req: Request, res: Response) => {
  const startTime = performance.now();
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedSnippet = await CodeSnippet.findByIdAndUpdate(id, updateData, {
      new: true,
      runValidators: true,
    });

    if (!updatedSnippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    logger.info("Snippet updated successfully", { snippet: updatedSnippet });
    res.status(200).json({
      message: "Snippet updated successfully",
      snippet: updatedSnippet,
    });
    const endTime = performance.now();
    logger.info(`Response time for snippet updating: ${endTime - startTime}ms`);
  } catch (error) {
    logger.error("Error updating snippet", { error });
    res.status(500).json({ message: "Error updating snippet" });
  }
};

// Delete a code snippet by ID
export const deleteSnippet = async (req: Request, res: Response) => {
  const startTime = performance.now();
  try {
    const { id } = req.params;
    const deletedSnippet = await CodeSnippet.findByIdAndDelete(id);

    if (!deletedSnippet) {
      return res.status(404).json({ message: "Snippet not found" });
    }

    logger.info("Snippet deleted successfully");
    res.status(200).json({ message: "Snippet deleted successfully" });
    const endTime = performance.now();
    logger.info(`Response time for snippet deleting: ${endTime - startTime}ms`);
  } catch (error) {
    logger.error("Error deleting snippet", { error });
    res.status(500).json({ message: "Error deleting snippet" });
  }
};
