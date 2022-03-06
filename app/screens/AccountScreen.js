import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import CompanyInfoScreen from "./CompanyInfoScreen";
import AppInfoScreen from "./AppInfoScreen";
import RecordScreen from "../screens/RecordScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="RecordScreen" component={RecordScreen} />
  </Stack.Navigator>
);

export default AccountNavigator;