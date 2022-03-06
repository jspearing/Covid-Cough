import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import { TouchableHighlight } from "react-native-gesture-handler";

import Button from "../components/Button";
//import routes from "../navigation/routes";

function WelcomeScreen({ navigation }) {
  return (
    <ImageBackground
      blurRadius={10}
      style={styles.background}
      source={require("../assets/MDT_CC_background1.png")}
    >
      <View style={styles.logoContainer}>
        <TouchableHighlight onPress={() => navigation.navigate("AppInfoScreen")}>
          <Image style={styles.logo} source={require("../assets/MSDS498_CC_logo2.png")} />
        </TouchableHighlight>
        <Text style={styles.tagline}>Test your cough now!</Text>
        <TouchableHighlight onPress={() => navigation.navigate("CompanyInfoScreen")}>
          <Text>MediData Technologies</Text>
        </TouchableHighlight>
      </View>
      <View style={styles.buttonsContainer}>
        <Button
          title="Login"
          onPress={() => navigation.navigate("Login")}
        />
        <Button
          title="Guest"
          color="secondary"
          onPress={() => navigation.navigate("Guest")}
        />
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
    width: 200,
    height: 200,
  },
  logo2: {
    width: 200,
    height: 200,
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

export default WelcomeScreen;
