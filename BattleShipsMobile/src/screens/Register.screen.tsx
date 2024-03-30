import { useState } from "react";
import {
  Image,
  Keyboard,
  SafeAreaView,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  TextInput,
  View,
  Button,
  ScrollView,
} from "react-native";
import { LOGO_BLACK, NO_BACKGROUND_LOGO } from "../constants/api.constants";

export default function RegisterScreen() {
  const [registerData, setRegisterData] = useState<any>();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image source={NO_BACKGROUND_LOGO} style={styles.logo} />

        {/* begin::form */}
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          {/* begin::firstName */}
          <Text style={styles.labelView}>First Name</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              //add On change
            />
          </View>
          {/* end::firstName */}

          {/* begin::LastName */}
          <Text style={styles.labelView}>Last Name</Text>
          <View style={styles.inputView}>
            <TextInput style={styles.textInput} />
          </View>
          {/* end::LastName */}

          {/* begin::username */}
          <Text style={styles.labelView}>Username</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              //add On change
            />
          </View>
          {/* end::username */}

          {/* begin::email */}
          <Text style={styles.labelView}>E-Mail</Text>
          <View style={styles.inputView}>
            <TextInput
              keyboardType="email-address"
              style={styles.textInput}
              //add On change
            />
          </View>
          {/* end::email */}

          {/* begin::phone */}
          <Text style={styles.labelView}>Phone Number</Text>
          <View style={styles.inputView}>
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              //add On change
            />
          </View>
          {/* end::phone */}

          {/* begin::password */}
          <Text style={styles.labelView}>Password</Text>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.textInput}
              //add On change
            />
          </View>
          {/* end::password */}

          <View style={styles.buttonView}>
            <Button title="Register" onPress={() => {}} />
          </View>
        </ScrollView>
        {/* end::form */}
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
    width: "100%",
    gap: 15,
    paddingHorizontal: 15,
    marginBottom: 5,
  },

  scrollContainer: {
    flexGrow: 1,
    alignItems: "center",
    justifyContent: "center",
    width: 275,
    paddingTop: 20, // Adjust as needed
    paddingBottom: 60, // Adjust as needed
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

  logo: {
    marginTop: 50,
    height: 180,
    width: 250,
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
  }
});
