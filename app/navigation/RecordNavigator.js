import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

//import LoginScreen from "../screens/LoginScreen";
//import RegisterScreen from "../screens/RegisterScreen";
//import WelcomeScreen from "../screens/WelcomeScreen";
//import GuestScreen from "../screens/GuestScreen";
import RecordScreen from "../screens/RecordScreen";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Record Cough"
      component={RecordScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="Login" component={LoginScreen} />
    <Stack.Screen name="Register" component={RegisterScreen} />
    <Stack.Screen name="Guest" component={GuestScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
