import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

import Button from "../components/Button";
import LoginScreen from "./LoginScreen";
import RegisterScreen from "./RegisterScreen";
import GuestScreen from "./GuestScreen";

console.log("in HomeScreen");

function HomeScreen(props) {

  console.log("in home screen function");
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/MDT_CC_background1.png")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/MSDS498_CC_logo2.png")} />
        <Text style={styles.tagline}>Wondering if you have covid?</Text>
        <Text style={styles.tagline}>Get results in 30 seconds with</Text>
        <Text style={styles.tagline}>COVIDCOUGH</Text>
        <Text style={styles.tagline}>by MediDataTech</Text>
      </View>
      <View style={styles.buttonsContainer}>
        <Button title="Guest" color="#a8c5e5" onPress={LoginScreen}/>
        <Button title="Login" color="primary" onPress={LoginScreen}/>
        <Button title="Register" color="secondary" onPress={RegisterScreen}/>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  buttonsContainer: {
    padding: 20,
    width: "100%",
  },
  logo: {
    width: 100,
    height: 100,
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagline: {
    fontSize: 25,
    fontWeight: "600",
    paddingVertical: 20,
  },
});

export default HomeScreen;