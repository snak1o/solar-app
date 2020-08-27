// BASE IMPORT
import React from "react";
import { StyleSheet, Image, View, Dimensions } from "react-native";

// REDUX IMPORT
import { useSelector } from "react-redux";

// IMPORT COMPONENTS
import PlanetInfoComponent from "../components/PlanetInfoComponent";
import SettingsButtonComponent from "../components/SettingsButtonComponent";
import GoBackArrowComponent from "../components/GoBackArrowComponent";

// CONFIG
import colors from "../config/colors";

// IMPORT SIMPLE LOADING COMPONENT
import { ActivityIndicator } from "react-native-paper";

// GET CURRENT SCREEN HEIGHT, WIDTH
const { height, width } = Dimensions.get("screen");

export default function PlanetScreen() {
  // GET THE LOADING STATE FROM GLOBAL STATE WITH REDUX
  const loading = useSelector((state) => state.loader.loading);

  // IF LOADING RETURN LOADING COMPONENT
  return loading ? (
    <ActivityIndicator />
  ) : (
    <View style={styles.container}>
      <View style={{ alignItems: "center" }}>
        <Image
          style={styles.header__background}
          source={require("../../assets/MainBackground.png")}
        />
        <GoBackArrowComponent />
        <SettingsButtonComponent />
        <View style={styles.planet__image}>
          <Image
            style={{ height: height * 0.37, width: width * 0.71 }}
            resizeMode="cover"
            source={require("../../assets/Mars.png")}
          />
        </View>
      </View>
      <View style={styles.planets}>
        <PlanetInfoComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  header__background: {
    height: height * 0.316,
    width: "100%",
    backgroundColor: colors.background,
    borderBottomLeftRadius: 32,
    borderBottomRightRadius: 32,
  },
  planets: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: height * 0.085,
  },
  planet__image: {
    position: "absolute",
    top: height * 0.055,
    alignItems: "center",
  },
});
