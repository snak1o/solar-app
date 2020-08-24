import React from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  DrawerLayoutAndroid,
} from "react-native";
import WelcomeComponent from "./components/WelcomeComponent";
import colors from "./config/colors";
import HomePageComponent from "./components/HomePageComponent";

import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import NavigationComponent from "./components/NavigationComponent";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

export default function App() {
  StatusBar.setBarStyle("light-content");
  return (
    <ImageBackground
      source={require("./assets/MainBackground.png")}
      style={styles.background}
    >
      <View style={styles.container}>
        <NavigationComponent />
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
