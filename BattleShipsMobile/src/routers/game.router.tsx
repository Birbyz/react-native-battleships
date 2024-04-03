import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "../screens/game/Menu.screen";

const gameStack = createNativeStackNavigator();

const gameRouter = (
    <gameStack.Navigator initialRouteName="Menu">
        <gameStack.Screen name="Menu" component={MenuScreen} />
    </gameStack.Navigator>
)

export default gameRouter