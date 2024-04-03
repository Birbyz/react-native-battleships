import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { IGameContainerItem } from "../interfaces/game.interface";

const GameContainer: React.FC<IGameContainerItem> = ({
  id,
  status,
  onPress,
}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View>
        <Text style={styles.gameText}>
          {id} | {status}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default GameContainer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,
    backgroundColor: "lightgreen",
    borderColor: "black",
    borderWidth: 2,
  },

  gameText: {
    marginTop: 10,
    marginBottom: 10,
  },
});
