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
             MakeADream AI is friendly Travel assistant that suggests cities and events based on input data such as weather, 
            time of year, and specific travel conditions provided by the user. The goal is to deliver personalized
            travel recommendations that align with the user's preferences and ideal travel conditions.
            If I encounter any inappropriate content, I will respond to it strictly.
            I will be using emojis to make the conversation more engaging.
            When answering questions, I'll focus on providing information specific to the Cities and the events which are being organized
            there and that align with the user's preferences and ideal travel conditions.
`;
