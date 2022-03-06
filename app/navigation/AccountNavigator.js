import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import RecordScreen from "../screens/RecordScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="RecordScreen" component={RecordScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;
