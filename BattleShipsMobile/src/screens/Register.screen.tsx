import { useEffect, useState } from "react";
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
import { NO_BACKGROUND_LOGO } from "../constants/api.constants";
import { emptyNewUserType, newUserType } from "../types/user.types";

export default function RegisterScreen() {
  const [registerData, setRegisterData] =
    useState<newUserType>(emptyNewUserType);
  const [errors, setErrors] = useState<Partial<newUserType>>({});
  const [isRegisterDataValid, setIsRegisterDataValid] = useState(false);

  useEffect(() => {
    validateForm();
  }, [registerData]);

  const handleInputChange = async (fieldname: string, value: any) => {
    setRegisterData({
      ...registerData,
      [fieldname]: value,
    });
  };

  const validateForm = async () => {
    let errors: Partial<newUserType> = {};

    // Validate First Name
    if (!registerData.first_name) {
      errors.first_name = "First Name is required";
    } else if (registerData.first_name.length < 3) {
      errors.first_name = "First name must be at least 6 characters.";
    }

    // Validate Last Name
    if (!registerData.last_name) {
      errors.last_name = 'Last Name is required';
    }  else if (registerData.last_name.length < 6) {
      errors.last_name = "Last name must be at least 6 characters.";
    }

    // Validate email field
    if (!registerData.email) {
      errors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(registerData.email)) {
      errors.email = "Email is invalid.";
    }

    // Validate phone field
    if (!registerData.phone) {
      errors.phone = " Phone number is required.";
    } else if (registerData.phone.length !== 10) {
      errors.phone = 'Phone number must have 10 numeric characters';
    }

    // Validate password field
    if (!registerData.password) {
      errors.password = "Password is required.";
    } else if (registerData.password.length < 6) {
      errors.password = "Password must be at least 6 characters.";
    }

    setErrors(errors);
    setIsRegisterDataValid(Object.keys(errors).length === 0);
  };

  const registerUser = async () => {
    console.log(registerData);
  };

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
              onChangeText={(e: string) => handleInputChange("first_name", e)}
            />
          </View>
          {/* end::firstName */}

          {/* begin::LastName */}
          <Text style={styles.labelView}>Last Name</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              onChangeText={(e: string) => handleInputChange("last_name", e)}
            />
          </View>
          {/* end::LastName */}

          {/* begin::username */}
          <Text style={styles.labelView}>Username</Text>
          <View style={styles.inputView}>
            <TextInput
              style={styles.textInput}
              onChangeText={(e: string) => handleInputChange("username", e)}
            />
          </View>
          {/* end::username */}

          {/* begin::email */}
          <Text style={styles.labelView}>E-Mail</Text>
          <View style={styles.inputView}>
            <TextInput
              keyboardType="email-address"
              style={styles.textInput}
              onChangeText={(e: string) => handleInputChange("email", e)}
            />
          </View>
          {/* end::email */}

          {/* begin::phone */}
          <Text style={styles.labelView}>Phone Number</Text>
          <View style={styles.inputView}>
            <TextInput
              keyboardType="numeric"
              style={styles.textInput}
              onChangeText={(e: string) => handleInputChange("phone", e)}
            />
          </View>
          {/* end::phone */}

          {/* begin::password */}
          <Text style={styles.labelView}>Password</Text>
          <View style={styles.inputView}>
            <TextInput
              secureTextEntry
              style={styles.textInput}
              onChangeText={(e: string) => handleInputChange("password", e)}
            />
          </View>
          {/* end::password */}

          <View style={styles.errorContainer}>
            {Object.values(errors).map((error, index) => (
              <Text key={index} style={styles.error}>
                {error as string}
              </Text>
            ))}
          </View>

          <View style={styles.buttonView}>
            {isRegisterDataValid ? (
              <Button title="Register" onPress={() => registerUser()} />
            ) : (
              <Button
                title="Register"
                onPress={() => registerUser()}
                disabled={true}
              />
            )}
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
  },

  errorContainer: {
    marginTop: 12,
    alignItems: "center",
  },

  error: {
    color: "red",
    marginBottom: 12,
  },
});
