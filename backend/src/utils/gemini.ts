import { GoogleGenerativeAI } from '@google/generative-ai';
import dotenv from "dotenv";
dotenv.config();

const GEMINI_API_KEY = process.env.GEMINI_API_KEY as string
const genAi = new GoogleGenerativeAI(GEMINI_API_KEY);
export default genAi