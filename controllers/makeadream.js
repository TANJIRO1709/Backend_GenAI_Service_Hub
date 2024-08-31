import { GoogleGenerativeAI } from "@google/generative-ai";
import { config } from "dotenv";
import generateQuestion from "../libs/generateQuestions.js";
import {
    generationConfig,
    safetySettings,
    systemInstruction,
} from "../config/aiconfig.js";

config();

const geminiKey = process.env.GEMINI_KEY;

const genAI = new GoogleGenerativeAI(geminiKey);

async function getAIResponse(req, res) {
    try {
        const { prompt } = req.body;
        if (!prompt) {
            return {
                error: "Prompt is required!",
                status: 400,
                response: null,
            };
        }

        const parts = generateQuestion(prompt);

        const model = genAI.getGenerativeModel({
            model: "gemini-1.5-flash",
            systemInstruction: systemInstruction,
        });
        let attempts = 0;
        const maxAttempts = 6;
        let result;
        while (attempts < maxAttempts) {
            console.log("Attempt No:", attempts);
            try {
                result = await model.generateContent({
                    contents: [{ role: "user", parts: parts || [] }],
                    safetySettings,
                    generationConfig,
                });

                if (result.response) {
                    break;
                }
            } catch (error) {
                if (error.status === 429) {
                    const retryAfter = Math.pow(2, attempts) * 2000;
                    await new Promise((resolve) =>
                        setTimeout(resolve, retryAfter)
                    );
                    attempts++;
                } else {
                    throw error;
                }
            }
        }

        if (!result || !result.response) {
            throw new Error(
                "Max attempts exceeded or no response from the server"
            );
        }

        const responseText = result.response.text();
        return res
            .status(200)
            .json({ response: responseText, status: 200, error: null });
    } catch (e) {
        console.error(e);
        const errorDetails = e.toString();
        return res
            .status(500)
            .json({ response: null, status: 500, error: errorDetails });
    }
}

export { getAIResponse };
