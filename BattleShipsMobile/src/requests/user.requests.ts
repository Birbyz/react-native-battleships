import { BACKEND_URL } from "../constants/api.constants";
import { newUserType } from "../types/user.types";

const BASE_HEADERS = {
  "Content-Type": "application/json",
  Accept: "application/json",
};

export const registerRequest = async (registerData: newUserType) => {
  const result = await fetch(`${BACKEND_URL
  }/auth/register`, {
    method: "POST",
    headers: {
      ...BASE_HEADERS,
    },
    body: JSON.stringify({
      email: registerData.email,
      password: registerData.password
    }),
  });
  const data = result.json();
  console.log(data)
  return data;
};
