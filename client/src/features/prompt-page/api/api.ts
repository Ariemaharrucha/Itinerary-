import axios from "axios";

interface IData {
    location: string;
    type: string;
    duration: number;
    budget: string;
    preferences: string;
}

export const generateItenray = async (values: IData) => {
  try {
    const {data: responseData } = await axios.post("http://localhost:8000/itinerary", values)
    return responseData
  } catch (error) {
    console.log(error);
  }
};
