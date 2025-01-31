import { getItinerary } from "../api/api-itinerary";

interface IData {
  location?: string | undefined;
  duration?: {from: Date, to: Date} | undefined;
  type?: string | undefined;
  budget?: string | undefined;
  preferences?: string[] | undefined
}

export const generateItenray = async (values: IData) => {
  if(!values) return;
  try {
    const updatedPreferences = values.preferences!.join(", ");

    const durationInDays = Math.ceil(
      (new Date(values.duration!.to).getTime() - new Date(values.duration!.from).getTime()) / (1000 * 3600 * 24)
    );

    const payload = {
      location: values.location,
      duration: durationInDays,
      type: values.type,
      budget: values.budget,
      preferences: updatedPreferences,
    };
    
    const responseData  = await getItinerary(payload)
    return responseData
  } catch (error) {
    console.log(error);
  }
};
