import { NavigationContainer } from "@react-navigation/native";
import authRouter from "./auth.router";
import gameRouter from "./game.router";
import { useContext } from "react";
import { AppContext } from "../context/app.context";

const Router: React.FC = () => {
  const { id } = useContext<any>(AppContext)

  return (
    <NavigationContainer>
      {id ? gameRouter : authRouter}
    </NavigationContainer>
  );
};

export default Router;