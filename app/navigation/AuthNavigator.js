import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import LoginScreen from "../screens/LoginScreen";
import WelcomeScreen from "../screens/WelcomeScreen";
import GuestScreen from "../screens/GuestScreen";
import AppInfoScreen from "../screens/AppInfoScreen";
import CompanyInfoScreen from "../screens/CompanyInfoScreen";
import AppNavigator from "./AppNavigator";

const Stack = createStackNavigator();

const AuthNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{ headerShown: false }}
    />
    <Stack.Screen name="AppInfoScreen" component={AppInfoScreen} />
    <Stack.Screen name="CompanyInfoScreen" component={CompanyInfoScreen} />
    <Stack.Screen name="Login" component={AppNavigator} />
    <Stack.Screen name="Guest" component={GuestScreen} />
  </Stack.Navigator>
);

export default AuthNavigator;
