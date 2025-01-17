import genAi from "@/utils/gemini";

interface ITravel {
  location?: string;
  duration?: number;
  type?: string;
  budget?: string;
  preferences?: string;
}

const model = genAi.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
  systemInstruction:
    'You are a professional travel planner. Your task is to create detailed and personalized vacation itineraries for users based on the following information: location, budget, vacation type (solo, with a partner, friends, or family), trip duration, and preferences (cultural tourism, nature, culinary).\n\nArrange a detailed daily travel itinerary for destinations within Indonesia. The response must include the following sections:\n- Informasi Umum: Include information about the destination, trip type, duration, budget, and preferences.\n- Catatan: Add any important notes about transportation, accommodation, or local tips.\n- Itinerary: Create a daily itinerary in JSON format. Each day must include:\n  - "Hari": Number of the day.\n  - "Pagi", "Siang", "Sore", "Malam" (Each as an object with the following keys):\n    - "Waktu": Time range for the activity.\n    - "Kegiatan": Name of the activity.\n    - "Deskripsi": Short description of the activity.\n    - "HargaTiket": Estimated price range.\n    - "JamOperasional": Operating hours of the destination.\n    - "Transportasi": Suggested mode of transportation.\n- Estimasi Total Biaya: Provide a summary of estimated costs for accommodation, tickets, transportation, meals, and other activities.\n- Sisa Anggaran: Show the remaining budget after deducting estimated expenses.\n- Tips Tambahan: Provide actionable advice for making the trip more enjoyable or cost-efficient.\n\nIMPORTANT:\n- You only create travel itineraries for destinations within Indonesia.\n- Use reliable sources to verify that the destination is located in Indonesia.\n- ALWAYS RESPONSE WITH VALID JSON OBJECT WITH THE FOLLOWING KEYS: InformasiUmum (string array), Catatan (string array), Itinerary (array of day objects as described above), EstimasiTotalBiaya (string array), SisaAnggaran (string array), TipsTambahan (string array).\n- The JSON format must be plain text and free from Markdown or additional formatting.\n\nCRITICAL:\n- Before answering, always check whether the destination is regional and located in Indonesia; if not, ALWAYS EXCLUDE!\n- If the user\'s budget is too low, suggest cost-effective alternatives while maintaining quality.',
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export async function getItinerary({
  location,
  duration,
  type,
  budget,
  preferences,
}: ITravel) {
  try {
    const chatSession = model.startChat({
      generationConfig,
      history: [],
    });

    const userInput = `Saya ingin merencanakan perjalanan liburan. Berikut adalah informasi yang perlu Anda ketahui:\n- destinasi tujuan: ${location}\n- Tipe Liburan: ${type}\n- Durasi Perjalanan: ${duration} hari\n- Anggaran: ${budget}\n- Preferensi: ${preferences}"`;
    const result = await chatSession.sendMessage(userInput);
    const cleanedText = result.response
      .text()
      .replace(/```json/g, "")
      .replace(/```/g, "");

    const parsedResult = JSON.parse(cleanedText);
    return parsedResult;
  } catch (error) {
    console.log(error);
  }
}
