import { useContext } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { AppContext } from "../../context/app.context";
import { AVATAR_LOGO } from "../../constants/api.constants";
import { useNavigation } from "@react-navigation/native";
import { GameScreensEnum } from "../../types/game.types";
import { AuthScreensEnum } from "../../types/auth.types";

const ProfileScreen = () => {
  const { user, handleLogout } = useContext<any>(AppContext);
  const navigation = useNavigation<any>();

  return (
    <SafeAreaView style={styles.container}>
      <Image source={AVATAR_LOGO} style={styles.logo} />

      <Text style={styles.labelView}>E-Mail</Text>
      <View style={styles.inputView}>
        <TextInput
          value={user?.email}
          style={styles.textInput}
          readOnly={true}
        />
      </View>

      <View style={{ paddingTop: 60 }}>
        <Button
          title="See Games!"
          onPress={() => navigation.navigate(GameScreensEnum.MENU)}
        />
        <Button
          title="Log out!"
          onPress={() => {
            handleLogout();
            navigation.navigate(AuthScreensEnum.LOGIN)
          }}
        />
      </View>
    </SafeAreaView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },

  inputView: {
    borderRadius: 30,
    height: 50,
    width: "75%",
    gap: 15,
    paddingHorizontal: 15,
    marginBottom: 5,
  },

  textInput: {
    backgroundColor: "#e2cfff",
    height: 50,
    width: "100%",
    paddingHorizontal: 15,
    marginBottom: 20,
    borderWidth: 1,
    borderColor: "#141117",
    borderRadius: 10,
    fontSize: 16,
    color: "#333333",
  },

  labelView: {
    paddingTop: 15,
    paddingBottom: 5,
  },

  buttonView: {
    marginTop: 25,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 32,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#0056b3",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 2,
  },

  logo: {
    marginTop: 50,
    marginBottom: 30,
    height: 250,
    width: 250,
  },
});
