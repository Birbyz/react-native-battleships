import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import LoginScreen from "./src/screens/Login.screen";
import RegisterScreen from "./src/screens/Register.screen";
import { NavigationContainer } from "@react-navigation/native";
import authRouter from "./src/routers/auth.router";
import Router from "./src/routers";

export default function App() {
  return <Router />;
}
