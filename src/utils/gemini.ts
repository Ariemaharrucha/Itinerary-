import { GoogleGenerativeAI } from '@google/generative-ai';

const GEMINI_API_KEY = import.meta.env.VITE_GEMINI_API_KEY as string;
const genAi = new GoogleGenerativeAI(GEMINI_API_KEY);
export default genAi;