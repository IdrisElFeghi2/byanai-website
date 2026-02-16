
import { GoogleGenAI } from "@google/genai";

const getAIClient = () => {
  return new GoogleGenAI({ apiKey: process.env.API_KEY || '' });
};

export const generateAIResponse = async (prompt: string): Promise<string> => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-3-pro-preview',
      contents: prompt,
      config: {
        systemInstruction: "You are the primary intelligence of Byan AI Systems. Your goal is to provide elite, professional, and technical consultations for enterprise AI integration. Your tone is authoritative, concise, and focused on strategic ROI and architectural integrity. Address the user as a high-value client.",
        temperature: 0.7,
        topP: 0.95,
      },
    });

    return response.text || "I apologize, but I'm unable to process that query at this moment. Please rephrase your strategic request.";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "The Byan Neural Network is currently undergoing optimized maintenance. Please reconnect shortly.";
  }
};
