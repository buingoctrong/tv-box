
import { GoogleGenAI } from "@google/genai";

// Sử dụng fallback chuỗi trống để tsc không báo lỗi nếu process.env.API_KEY undefined
const apiKey = (typeof process !== 'undefined' && process.env.API_KEY) ? process.env.API_KEY : "";
const ai = new GoogleGenAI({ apiKey: apiKey });

export class GeminiService {
  async getTroubleshootingAdvice(issue: string): Promise<string> {
    if (!apiKey) {
      return "Tính năng AI hiện đang tạm bảo trì do chưa cấu hình API Key. Vui lòng liên hệ quản trị viên.";
    }
    
    try {
      const response = await ai.models.generateContent({
        model: 'gemini-2.5-flash-preview-09-2025',
        contents: `Bạn là một chuyên gia sửa chữa Android TV Box. Người dùng đang gặp vấn đề: "${issue}". Hãy phân tích nguyên nhân và đưa ra 3-5 bước khắc phục ngắn gọn, chuyên nghiệp bằng tiếng Việt.`,
      });
      return response.text || "Xin lỗi, tôi không thể phân tích vấn đề này ngay bây giờ.";
    } catch (error) {
      console.error("Gemini Error:", error);
      return "Đã xảy ra lỗi khi kết nối với chuyên gia AI.";
    }
  }
}

export const geminiService = new GeminiService();
