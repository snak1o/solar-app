import React from "react";
import { StyleSheet, View, StatusBar, ImageBackground } from "react-native";
import WelcomeComponent from "./components/WelcomeComponent";
import colors from "./config/colors";
import HomePageComponent from "./components/HomePageComponent";

export default function App() {
  StatusBar.setBarStyle("light-content");
  return (
    <ImageBackground
      source={require("./assets/MainBackground.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <HomePageComponent />
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
});
