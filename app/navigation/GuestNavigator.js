import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RecordScreen from "../screens/RecordScreen";
import AppInfoScreen from "../screens/AppInfoScreen";

const Stack = createStackNavigator();

const GuestNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="RecordScreen" component={RecordScreen} />
    <Stack.Screen name="AppInfoScreen" component={AppInfoScreen} />
  </Stack.Navigator>
);

export default GuestNavigator;