import { createContext, useMemo, useState } from "react";
import { loginRequest, registerRequest } from "../requests/user.requests";

const AppContext = createContext({});
function AppProvider(props) {
  const [jwt, setJwt] = useState<string>("");
  const [id, setId] = useState<string>('');

  const handleLogin = async (loginData) => {
    try {
      const result = await loginRequest(loginData)
      console.log("Login: ", result)
      const token = result?.accessToken
      setJwt(token)
    } catch (error) {
      console.log(`Something went wrong! ${error || ''}`);
    }
  };

  const handleRegister = async (registerData) => {
    try {
      const result = await registerRequest(registerData)
      console.log("Register", result)
      const id = result?.id
      setId(id);

      // const token = result?.accessToken
      // setJwt(token)
    } catch (error) {
      console.log(`Something went wrong! ${error || ''}`);
    }
  };

  const store = {
    handleLogin,
    handleRegister,
    jwt,
    id
  };

  const storeForProvider = useMemo(() => store, [store]);
  return (
    <AppContext.Provider value={storeForProvider}>
      {props.children}
    </AppContext.Provider>
  );
}

export { AppContext };
export default AppProvider;
