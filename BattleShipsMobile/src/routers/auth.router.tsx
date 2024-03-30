import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "../screens/Login.screen";
import RegisterScreen from "../screens/Register.screen";

const authStack = createNativeStackNavigator()

const authRouter = (
    <authStack.Navigator initialRouteName="Login">
        <authStack.Screen name='Login' component={LoginScreen} />
        <authStack.Screen name='Register' component={RegisterScreen} />
    </authStack.Navigator>
)

export default authRouter;