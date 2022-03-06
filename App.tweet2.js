import React from "react";
import { Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { MaterialCommunityIcons } from "@expo/vector-icons";

import Screen from "./app/components/Screen";

//import WelcomeScreen from "./app/screens/WelcomeScreen";
//import ViewImageScreen from "./app/screens/ViewImageScreen";
//import AppInfoScreen from "./app/screens/AppInfoScreen";
import CompanyInfoScreen from "./app/screens/CompanyInfoScreen";
import AccountScreen from "./app/screens/AccountScreen.bak";
//import LoginScreen from "./app/screens/LoginScreen";
//import RegisterScreen from "./app/screens/RegisterScreen";
//import HomeScreen from "./app/screens/HomeScreen";

//import navigationTheme from "./app/navigation/navigationTheme";

const CompanyInfo = ({ navigation }) => (
    <Screen>
       <Text>View Company Info</Text>
        <Button title = "CompanyInfo" 
            onPress={() => navigation.navigate("CompanyInfo")} >
            <img src="./app/assets/MSDS498_MDT_Logo.png"></img>
        </Button>            
    </Screen>
);

const Account = () => <Screen><Text> Account </Text></Screen>

const AppInfo = ({ navigation }) => (
    <Screen>
        <Text>View Application Info</Text>
        <Button title = "View Application Info" 
            onPress={() => navigation.navigate("AppInfo")} >
            <img src="./app/assets/MSDS498_CC_logo2.png"></img>
        </Button>
    </Screen>
);

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator initialRouteName = "CompanyInfo">
        <Stack.Screen name="About MDT" component={CompanyInfo} />
        <Stack.Screen name="About CovidCough" component={AppInfo} />
    </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
    <Tab.Navigator
        tabBarOptions= {{
            activeBackgroundColor: "#a8c5e5",
            activeTintColor: "white",
            inactiveBackgroundColor: " #eee",
            inactiveTintColor: "black",  
        }}>
        <Tab.Screen 
            name = "home" 
            component={StackNavigator} 
            options={{
                tabBarIcon: ({ size, color }) => (
                    <MaterialCommunityIcons name="home" size={size} color={color}  />
                ),
            }}
        />

        <Tab.Screen name = "Account" component={Account} />

    </Tab.Navigator>
)

export default function App() {
    return (
        <NavigationContainer>
            <TabNavigator />
        </NavigationContainer>
    );
}