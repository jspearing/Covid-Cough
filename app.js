import React from "react";
import { Text, Button } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Screen from "./app/components/Screen";

import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppInfoScreen from "./app/screens/AppInfoScreen";
import CompanyInfoScreen from "./app/screens/CompanyInfoScreen";
import LoginScreen from "./app/screens/LoginScreen";
import RegisterScreen from "./app/screens/RegisterScreen";
import HomeScreen from "./app/screens/HomeScreen";

//import navigationTheme from "./app/navigation/navigationTheme";

const Tweets = ({ navigation }) => (
    <Screen>
        <Text>Tweets</Text>
        <Button
            title="View Tweet"
            onPress={() => navigation.navigate("TweetDetails")} 
        />
         <Button>
            title="View Company Info"
            <img src="./app/assets/MSDS498_MDT_Logo.png"></img>
            onPress={() => navigation.navigate("CompanyInfoScreen")} 
            </Button>
    </Screen>
);

const TweetDetails = () => (
    <Screen>
        <Text>TweetDetails</Text>
    </Screen>
);

const Stack = createStackNavigator();

const StackNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Tweets" component={Tweets} />
        <Stack.Screen name="TweetDetails" component={TweetDetails} />
        <Stack.Screen name="About Us" component={CompanyInfoScreen} />
    </Stack.Navigator>
)
export default function App() {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}