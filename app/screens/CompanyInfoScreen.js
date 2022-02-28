import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";

console.log("in company info screen");

function CompanyInfoScreen(props) {
  console.log("in company info screen function");
  return (
    <ImageBackground>
      style={styles.background}
      source={require("../assets/MSDS498_CC_AboutMDT.png")}
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

export default CompanyInfoScreen;
