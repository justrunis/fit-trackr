import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const URL = "https://trackapi.nutritionix.com/v2";

const defaultHeaders = {
  "Content-Type": "application/json",
};

export async function getNaturalNutrients({ search }) {
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "x-app-id": import.meta.env.VITE_NUTRITIONIX_ID,
      "x-app-key": import.meta.env.VITE_NUTRITIONIX_KEY,
    },
    body: JSON.stringify({
      query: search,
    }),
  };

  console.log(options);

  const response = await fetch(`${URL}/natural/nutrients`, options);
  const data = await response.json();
  return data;
}
