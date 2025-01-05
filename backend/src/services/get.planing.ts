import genAi from "../utils/gemini";

interface ITravel {
  location: string;
  duration: number;
  type: string;
  budget: string;
  preferences: string;
}

export async function getPlaning({
  location,
  duration,
  type,
  budget,
  preferences,
}: ITravel) {
  const generationConfig = {
    temperature: 1,
    top_p: 0.95,
    top_k: 40,
    max_output_tokens: 8192,
    response_mime_type: "text/plain",
  };
  try {
    const model = genAi.getGenerativeModel({ model: "gemini-2.0-flash-exp" });
    const completion = model.startChat({
      generationConfig,
      history: [
        {
          role: "user",
          parts: [
            {
              text: `You are a professional travel planner. Your task is to create detailed and personalized vacation itineraries for users based on the following information: location, budget, vacation type (solo, with a partner, friends, or family), trip duration, and preferences (cultural tourism, nature, culinary).
  
              Arrange a detailed daily travel itinerary for destinations within Indonesia. The response must include the following sections:
              - Informasi Umum: Include information about the destination, trip type, duration, budget, and preferences.
              - Catatan: Add any important notes about transportation, accommodation, or local tips.
              - Itinerary: Create a daily itinerary, including:
                  - Morning, afternoon, evening activities.
                  -  Destination names, brief descriptions, ticket prices, opening and closing hours, and suggested transportation  methods.
              - Estimasi Total Biaya: Provide a summary of estimated costs for accommodation, tickets, transportation, meals, and other activities.
              - Sisa Anggaran: Show the remaining budget after deducting estimated expenses.
              - Tips Tambahan: Provide actionable advice for making the trip more enjoyable or cost-efficient.
  
              IMPORTANT :
              - You only create travel itineraries for destinations within Indonesia.
              - Use reliable sources to verify that the destination is located in Indonesia.
  
              IMPORTANT :
              - ALWAYS RESPONSE WITH VALID JSON OBJECT WITH FOLLOWING KEYS : InformasiUmum (string Array), Catatan (string Array), Itinerary (string Array), EstimasiTotalBiaya (string Array), SisaAnggaran (stringArray), TipsTambahan(string Array)
  
              CRITICAL:
              - Before answering, always check whether the destination is regional and located in Indonesia, if not, ALWAYS EXCLUDE!.
              - If the user's budget is too low, suggest cost-effective alternatives while maintaining quality.`,
            },
          ],
        },
      ],
    });

    const userInput = `Saya ingin merencanakan perjalanan liburan. Berikut adalah informasi yang perlu Anda ketahui:
                    - destinasi tujuan: ${location}
                    - Tipe Liburan: ${type}
                    - Durasi Perjalanan: ${duration} hari
                    - Anggaran: ${budget}
                    - Preferensi: ${preferences}`;
    const result = await completion.sendMessage(userInput);
    // let response = result.response.candidates[0].content.parts[0].text;

    // response = response.replace(/```json|```/g, "").trim();

    return result
  } catch (error) {
    console.log(error);
    
  }

  

}
