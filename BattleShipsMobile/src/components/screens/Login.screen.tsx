import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image
} from "react-native";
import { NO_BACKGROUND_LOGO } from "../../constants/api.constants";



export default function LoginScreen() {
  return (
    <SafeAreaView style={styles.container}>
        <Image source={NO_BACKGROUND_LOGO} style={styles.logo} />

      <Text style={styles.labelView}>E-Mail</Text>
      <View style={styles.inputView}>
        <TextInput keyboardType="email-address" style={styles.textInput} />
      </View>

      <Text style={styles.labelView}>Password</Text>
      <View style={styles.inputView}>
        <TextInput secureTextEntry style={styles.textInput} />
      </View>

      <View style={styles.buttonView}>
        <Button title="Log in!" />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "70%",
    alignItems: "center",
    //paddingTop: 70,
  },

  inputView: {
    borderRadius: 30,
    height: 50,
    width: "100%",
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
    borderWidth: 2, // Border width
    borderColor: "#0056b3", // Border color
    shadowColor: "#000", // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.3, 
    shadowRadius: 2, 
  },

  logo: {
    marginBottom: 70,
    height: 180,
    width: 250
  }
});
