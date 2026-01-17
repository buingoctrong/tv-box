
import { GoogleGenAI } from "@google/genai";

// Always use new GoogleGenAI({ apiKey: process.env.API_KEY }) as per guidelines.
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export class GeminiService {
  async getTroubleshootingAdvice(issue: string): Promise<string> {
    try {
      // Use ai.models.generateContent with both model name and prompt.
      // Troubleshooting is a complex reasoning task, so 'gemini-3-pro-preview' is selected.
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-preview',
        contents: `Bạn là một chuyên gia sửa chữa Android TV Box. Người dùng đang gặp vấn đề: "${issue}". Hãy phân tích nguyên nhân và đưa ra 3-5 bước khắc phục ngắn gọn, chuyên nghiệp bằng tiếng Việt. Nếu vấn đề liên quan đến phần mềm, hãy gợi ý họ tìm firmware phù hợp trên website của chúng tôi.`,
      });
      // Access the extracted string output directly from the .text property.
      return response.text || "Xin lỗi, tôi không thể phân tích vấn đề này ngay bây giờ. Vui lòng thử lại sau.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Đã xảy ra lỗi khi kết nối với chuyên gia AI. Vui lòng kiểm tra kết nối mạng.";
    }
  }
}

export const geminiService = new GeminiService();
