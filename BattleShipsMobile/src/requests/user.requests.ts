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

export const getUserRequest = async (id: string, email: string) => {
  const result = await fetch(`${BACKEND_URL}/user/details/me?id=${id}&email=${email}`, {
    method: 'GET',
    headers: {
      ...BASE_HEADERS
    }
  })
  const data = result.json()
  console.log(data)
}