import React from "react";
import { StyleSheet, View, FlatList } from "react-native";

import { ListItem, ListItemSeparator } from "../components/lists";
import colors from "../config/colors";
import Icon from "../components/Icon";
import Screen from "../components/Screen";
import RecordScreen from "./RecordScreen";
import AppInfoScreen from "./AppInfoScreen";
import CompanyInfoScreen from "./CompanyInfoScreen";
import { createStackNavigator } from '@react-navigation/stack';

console.log("in guest screen");
const menuItems = [
  {
    title: "My Results",
    icon: {
      name: "format-list-bulleted",
      backgroundColor: colors.primary,
    },
  },
  {
    title: "My Recordings",
    icon: {
      name: "record",
      backgroundColor: colors.secondary,
    },
  },
];

function GuestScreen({ navigation }) {
  console.log("in guest screen function");
  return (
    <Screen style={styles.screen}>
      <View style={styles.container}>
        <ListItem
          title="Covid Test"
          subTitle="Record Cough"
          image={require("../assets/MSDS498_CC_logo2.png")}
          onPress={() => navigation.navigate("RecordScreen")}
        />
      </View>
    </Screen>
  );
}

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="App Info" component={AppInfoScreen} />
        <Stack.Screen name="Company Info" component={CompanyInfoScreen} />
    </Stack.Navigator>
)


const styles = StyleSheet.create({
  screen: {
    backgroundColor: colors.light,
  },
});

export default GuestScreen;
