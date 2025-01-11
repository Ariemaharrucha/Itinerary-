import axios from "axios";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const generateItenray = async (values: any) => {
  try {
    const updatedPreferences = values.preferences.join(", ");

    const durationInDays = Math.ceil(
      (new Date(values.duration.to).getTime() - new Date(values.duration.from).getTime()) / (1000 * 3600 * 24)
    );

    const payload = {
      location: values.location,
      duration: durationInDays,
      type: values.type,
      budget: values.budget,
      preferences: updatedPreferences,
    };

    const {data: responseData } = await axios.post("http://localhost:8000/itinerary", payload)
    return responseData
  } catch (error) {
    console.log(error);
  }
};
