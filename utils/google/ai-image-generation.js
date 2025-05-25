import { GoogleGenAI, Modality } from "@google/genai";

export async function main(prompt) {
  const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY || "" });
  const contents = prompt;
  const response = await ai.models.generateContent({
    model: "gemini-2.0-flash-preview-image-generation",
    contents: contents,
    config: {
      responseModalities: [Modality.TEXT, Modality.IMAGE],
    },
  });
  const image = response.candidates[0].content.parts[1].inlineData.data;
  return image;
}
