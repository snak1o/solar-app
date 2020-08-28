// BASE IMPORT
import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";

// CONFIG
import colors from "../config/colors";

// IMPORT COMPONENTS
import SearchComponent from "../components/HomeScreenComponents/SearchComponent";
import SettingsButtonComponent from "../components/SettingsButtonComponent";
import GoBackArrowComponent from "../components/GoBackArrowComponent";
import PlanetCardComponent from "../components/PlanetCardComponent";

// REACT - NAVIGATION IMPORT
import { createStackNavigator } from "@react-navigation/stack";

// SCREENS IMPORT
import PlanetScreen from "./PlanetScreen";

// GET CURRENT SCREEN HEIGHT AND WIDTH
const { height, width } = Dimensions.get("screen");

// CREATE STACK NAVIGATOR
const Stack = createStackNavigator();

const ChildComponent = () => (
  <ImageBackground
    style={styles.background}
    source={require("../../assets/MainBackground.png")}
  >
    <View style={styles.container}>
      <GoBackArrowComponent />
      <SettingsButtonComponent />
      <Text style={styles.header}>Search</Text>
      <SearchComponent placeholderText="Look for planets, asteroids, stars..." />
      <ScrollView style={styles.planets}>
        <PlanetCardComponent />
        <Text style={styles.planets__text}>You may also like</Text>
        <PlanetCardComponent />
      </ScrollView>
    </View>
  </ImageBackground>
);

export default function SearchScreen() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SearchScreen" component={ChildComponent} />
      <Stack.Screen name="PlanetInfoScreen" component={PlanetScreen} />
    </Stack.Navigator>
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
    paddingLeft: width * 0.05,
    paddingRight: width * 0.05,
    width: width,
  },
  header: {
    paddingTop: height * 0.074,
    fontSize: 27,
    paddingBottom: 35,
    color: colors.white,
    textAlign: "center",
  },
  planets: {
    paddingTop: 40,
  },
  planets__text: {
    color: colors.white,
    fontSize: 16,
    paddingTop: 40,
    paddingBottom: 20,
  },
});
