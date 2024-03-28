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
} from "react-native";
import { LOGO_BLACK } from "../constants/api.constants";

export default function RegisterScreen() {
  const [registerData, setRegisterData] = useState<any>();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <SafeAreaView style={styles.container}>
        <Image source={LOGO_BLACK} style={styles.logo} />

        {/* begin::form */}

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

        {/* end::form */}
      </SafeAreaView>
    </TouchableWithoutFeedback>
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
  logo: {
    //marginBottom: 70,
    height: 180,
    width: 250,
  },
});
