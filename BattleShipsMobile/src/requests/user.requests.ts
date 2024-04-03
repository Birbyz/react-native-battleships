import { BACKEND_URL, BASE_HEADERS } from "../constants/api.constants";
import { UserType } from "../types/user.types";

export const registerRequest = async (registerData: UserType) => {
  const result = await fetch(`${BACKEND_URL}/auth/register`, {
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
  return data;
};

export const loginRequest = async (loginData: UserType) => {
  const result = await fetch(`${BACKEND_URL}/auth/login`, {
    method: 'POST',
    headers: {
      ...BASE_HEADERS
    },
    body: JSON.stringify({
      email: loginData?.email,
      password: loginData?.password
    })
  })
  const data = result.json();

  return data;
}