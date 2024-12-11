import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient();

const NUTRITIONIX_URL = "https://trackapi.nutritionix.com/v2";
const EXCERCIES_URL = "https://api.api-ninjas.com/v1/exercises";

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

  const response = await fetch(`${NUTRITIONIX_URL}/natural/nutrients`, options);
  const data = await response.json();
  return data;
}

export async function getExercises({ muscle, type, difficulty }) {
  const options = {
    method: "GET",
    headers: {
      "X-Api-Key": import.meta.env.VITE_EXERCISE_KEY,
    },
  };
  const URL = `${EXCERCIES_URL}?muscle=${muscle}&type=${type}&difficulty=${difficulty}`;

  const response = await fetch(URL, options);
  const data = await response.json();
  return data;
}
