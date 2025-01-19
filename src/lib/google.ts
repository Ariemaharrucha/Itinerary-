// import { Client } from "@googlemaps/google-maps-services-js";

import axios from "axios"

// const client = new Client();
// export const autoComplete = async (input: string) => {
//   if (!input) return [];
//   try {
//     const response = await client.placeAutocomplete({
//       params: {
//         input,
//         key: import.meta.env.VITE_GOOGLE_API_KEY!,
//         // components: "country:ID",
//       },
//     });
//     return response.data.predictions;
//   } catch (error) {
//     console.log(error);
//   }
// };

export const autoComplete = async (input: string) => {
  if (!input) return [];
  try {
    const response = await axios.get("https://autocomplete.search.hereapi.com/v1/autocomplete",{
      params: {
        q: input,
        apiKey: import.meta.env.VITE_API_KEY!,
        in: "countryCode:IDN",
        limit: 5,
      }
    });
    return response.data.items;
  } catch (error) {
    console.error("Error fetching autocomplete results:", error);
    return [];
  }
}