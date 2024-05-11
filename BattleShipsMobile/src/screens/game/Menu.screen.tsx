import {
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  View,
} from "react-native";
import { useContext, useEffect, useState } from "react";
import { getGamesRequest } from "../../requests/game.requests";
import { AppContext } from "../../context/app.context";
import { NO_BACKGROUND_LOGO } from "../../constants/api.constants";
import GameContainer from "../../components/GameContainer.component";
import { useNavigation } from "@react-navigation/native";
import { GameScreensEnum } from "../../types/game.types";

const MenuScreen = () => {
  const [total, setTotal] = useState<number>(0);
  const [games, setGames] = useState<any[]>([]);

  const { user } = useContext<any>(AppContext);
  const navigation = useNavigation<any>();

  const fetchGames = async () => {
    try {
      const response = await getGamesRequest(user.id);
      const num = response?.total;
      const gamesList = response?.games;

      setTotal(num);
      setGames(gamesList);
    } catch (error) {
      console.log(`Something went wrong ${error || ""}`);
    }
  };

  useEffect(() => {
    fetchGames();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Image source={NO_BACKGROUND_LOGO} style={styles.logo} />
      <Text>Total Games: {total}</Text>

      <ScrollView>
        <View style={styles.gameContainer}>
          {games &&
            games.map((item) => (
              <View style={{ paddingBottom: 5 }} key={item.id}>
                <GameContainer
                  key={item.id}
                  status={item.status}
                  id={item.id}
                  onPress={() => {
                    console.log('aa')
                    navigation.navigate(GameScreensEnum.TABLE, {gameId: item.id})
                  }}
                />
              </View>
            ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MenuScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    paddingBottom: 40,
  },

  logo: {
    marginTop: 50,
    marginBottom: 30,
    height: 180,
    width: 250,
  },

  gameContainer: {
    paddingBottom: 20,
  },
});
