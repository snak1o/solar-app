// BASE IMPORT
import React from "react";
import { StyleSheet, View, ScrollView, ImageBackground } from "react-native";

// CONFIG
import colors from "../config/colors";

// IMPORT COMPONENTS
import SearchComponent from "../components/HomeScreenComponents/SearchComponent";
import CategoriesComponent from "../components/HomeScreenComponents/CategoriesComponent";
import PlanetsComponent from "../components/HomeScreenComponents/PlanetsComponent";
import HomepageAppbarComponent from "../components/HomeScreenComponents/HomepageAppbarComponent";
import SettingsButtonComponent from "../components/SettingsButtonComponent";

function HomePageComponent() {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/MainBackground.png")}
    >
      <View style={styles.container}>
        <View style={styles.main}>
          <HomepageAppbarComponent />
          <SettingsButtonComponent />
          <SearchComponent />
        </View>
        <ScrollView>
          <CategoriesComponent />
          <PlanetsComponent />
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomePageComponent;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: colors.background,
  },
  container: {
    fontFamily: "Roboto",
    height: "100%",
  },
  main: {
    paddingLeft: 20,
    paddingRight: 20,
  },
});
