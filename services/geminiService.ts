import { GoogleGenAI } from "@google/genai";
import { AI_SYSTEM_INSTRUCTION } from '../constants';

let aiClient: GoogleGenAI | null = null;

const getAiClient = () => {
  if (!aiClient) {
    const apiKey = process.env.API_KEY;
    if (apiKey) {
      aiClient = new GoogleGenAI({ apiKey });
    } else {
      console.warn("API_KEY is not defined in process.env");
    }
  }
  return aiClient;
};

export const sendMessageToGemini = async (userMessage: string, history: {role: string, parts: {text: string}[]}[] = []): Promise<string> => {
  const ai = getAiClient();
  
  if (!ai) {
    return "I'm sorry, I can't connect to the AI service right now (Missing API Key). Please try contacting Alex directly via email.";
  }

  try {
    const model = "gemini-2.5-flash";
    
    // Create a chat session
    const chat = ai.chats.create({
      model: model,
      config: {
        systemInstruction: AI_SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
      history: history,
    });

    const response = await chat.sendMessage({ message: userMessage });
    
    return response.text || "I didn't get a response. Please try again.";
    
  } catch (error) {
    console.error("Error communicating with Gemini:", error);
    return "I encountered a temporary error. Please try again later.";
  }
};
