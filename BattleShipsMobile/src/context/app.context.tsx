import { createContext, useMemo, useState } from "react";
import { getUserRequest, loginRequest, registerRequest } from "../requests/user.requests";
import { RegisteredUserType, emptyRegisteredUserType } from "../types/auth.types";

const AppContext = createContext({});

function AppProvider(props) {
  const [jwt, setJwt] = useState<string>("");
  const [id, setId] = useState<string>('');
  const [user, setUser] = useState<RegisteredUserType>(emptyRegisteredUserType)

  const handleLogin = async (loginData) => {
    try {
      const result = await loginRequest(loginData)
      console.log("Login: ", result)
      const token = result?.accessToken
      const email = loginData?.email

      setJwt(token)
      setUser({id: token, email})
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
      const email = registerData?.email
      setUser({ id, email });
  
      const userResult = await getUserRequest(id, email)
    } catch (error) {
      console.log(`Something went wrong! ${error || ''}`);
    }
  };

  const handleLogout = () => {
    setJwt(null)
    setId(null)
    setUser(null)
  }

  const store = {
    handleLogin,
    handleRegister,
    handleLogout,
    jwt,
    id,
    user
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
