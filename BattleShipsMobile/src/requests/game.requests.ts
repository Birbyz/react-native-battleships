import { BACKEND_URL, BASE_HEADERS } from "../constants/api.constants";

export const getGamesRequest = async (jwt: string) => {
  const result = await fetch(`${BACKEND_URL}/game`, {
    method: "GET",
    headers: {
      ...BASE_HEADERS,
      Authorization: `Bearer ${jwt}`
    },
  });
  const data = result.json();
  return data
};
