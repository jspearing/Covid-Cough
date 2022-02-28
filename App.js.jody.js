import React from "react";
import { View } from "react-native";


import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppInfoScreen from "./app/screens/AppInfoScreen";
import CompanyInfoScreen from "./app/screens/CompanyInfoScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import HomeScreen from "./app/screens/HomeScreen";


console.log("in app.js");

export default function App() {
  console.log("in app function")
  return <HomeScreen />;
}