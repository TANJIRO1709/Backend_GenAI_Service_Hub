import express from "express";
import { getAIResponse } from "../controllers/serviceHub.js";

const router = express.Router();

router.post("/", getAIResponse);

export default router;