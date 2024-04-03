import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  Button,
  Image,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { NO_BACKGROUND_LOGO } from "../../constants/api.constants";
import { useContext, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { UserType, emptyUserType } from "../../types/user.types";
import { AppContext } from "../../context/app.context";

export default function LoginScreen() {
  const [loginData, setLoginData] = useState<UserType>(emptyUserType);

  const { handleLogin } = useContext<any>(AppContext)
  const navigation = useNavigation<any>();

  const handleInputChange = async (fieldname: string, value: any) => {
    setLoginData({
      ...loginData,
      [fieldname]: value,
    });
  };

  const submitData = async () => {
    try {
      handleLogin(loginData)
    } catch (error) {
      console.log(`Something went wrong! ${error || ''}`);
    }
  };
  

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image source={NO_BACKGROUND_LOGO} style={styles.logo} />

        <Text style={styles.labelView}>E-Mail</Text>
        <View style={styles.inputView}>
          <TextInput
            keyboardType="email-address"
            style={styles.textInput}
            onChangeText={(e: string) => handleInputChange("email", e)}
          />
        </View>

        <Text style={styles.labelView}>Password</Text>
        <View style={styles.inputView}>
          <TextInput
            secureTextEntry
            style={styles.textInput}
            onChangeText={(e: string) => handleInputChange("password", e)}
          />
        </View>

        <View style={styles.buttonView}>
          <Button title="Log in!" onPress={() => submitData()} />
        </View>
        
        <View style={{paddingTop: 60}}>
          <Text style={styles.labelView}>Looking for a new account?</Text>
          <Button title="Register here!"
            onPress={() => navigation.navigate('Register')}
            />
        </View>

      </SafeAreaView>
    </TouchableWithoutFeedback>
  );
}

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
  }
});
