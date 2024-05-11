import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MenuScreen from "../screens/game/Menu.screen";
import ProfileScreen from "../screens/profile/Profile.screen";
import TableScreen from "../screens/game/Table.screen";
import { GameScreensEnum } from "../types/game.types";
import { AuthScreensEnum } from "../types/auth.types";

const gameStack = createNativeStackNavigator();

const gameRouter = (
    <gameStack.Navigator initialRouteName={AuthScreensEnum.PROFILE}>
        <gameStack.Screen name={AuthScreensEnum.PROFILE} component={ProfileScreen} />
        <gameStack.Screen name={GameScreensEnum.MENU} component={MenuScreen} />
        <gameStack.Screen name={GameScreensEnum.TABLE} component={TableScreen} />
    </gameStack.Navigator>
)

export default gameRouter