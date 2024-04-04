import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/auth/Login.screen";
import RegisterScreen from "../screens/auth/Register.screen";
import { AuthScreensEnum } from "../types/auth.types";

const authStack = createNativeStackNavigator();

const authRouter = (
  <authStack.Navigator initialRouteName={AuthScreensEnum.LOGIN}>
    <authStack.Screen name={AuthScreensEnum.LOGIN} component={LoginScreen} />
    <authStack.Screen name={AuthScreensEnum.REGISTER} component={RegisterScreen} />
  </authStack.Navigator>
);

export default authRouter;
