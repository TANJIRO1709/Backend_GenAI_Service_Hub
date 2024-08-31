import express from "express";
import { getAIResponse } from "../controllers/makeadream.js";

const router = express.Router();

router.post("/", getAIResponse);

export default router;