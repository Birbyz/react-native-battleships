import { NavigationContainer } from "@react-navigation/native";
import authRouter from "./auth.router";

const Router: React.FC = () => {
  return <NavigationContainer>{authRouter}</NavigationContainer>;
};

export default Router;