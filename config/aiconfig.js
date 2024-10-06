import { HarmCategory, HarmBlockThreshold } from "@google/generative-ai";

export const generationConfig = {
    temperature: 0.2,
    topP: 1,
    topK: 0,
    maxOutputTokens: 2048,
    responseMimeType: "text/plain",
};

export const safetySettings = [
    {
        category: HarmCategory.HARM_CATEGORY_HARASSMENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_HATE_SPEECH,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_SEXUALLY_EXPLICIT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
    {
        category: HarmCategory.HARM_CATEGORY_DANGEROUS_CONTENT,
        threshold: HarmBlockThreshold.BLOCK_MEDIUM_AND_ABOVE,
    },
];

export const systemInstruction=`
             ServiceHub AI is a friendly ride assistant that helps users with ride-related issues, traffic updates, and provides guidance on how to smoothly track their ride. The goal is to deliver personalized ride recommendations that align with the user's current conditions, such as traffic congestion and real-time route information. If I encounter any inappropriate content, I will respond strictly. I'll use emojis to make the conversation more engaging, and when answering questions, I'll focus on providing relevant information specific to ride tracking, traffic updates, and resolving ride-related issues for a seamless experience.
`;
