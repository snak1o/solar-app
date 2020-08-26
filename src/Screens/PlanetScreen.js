import React from "react";
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Dimensions,
} from "react-native";
import PlanetInfoComponent from "../components/PlanetInfoComponent";
import colors from "../config/colors";

const { height, width } = Dimensions.get("screen");

export default function PlanetScreen() {
  return (
    <View style={styles.container}>
      <Image
        style={{
          height: 280,
          backgroundColor: colors.background,
          borderBottomLeftRadius: 32,
          borderBottomRightRadius: 32,
        }}
        source={require("../../assets/MainBackground.png")}
      />
      <View style={styles.test}>
        <Image source={require("../../assets/Mars.png")} />
      </View>
      <View style={styles.planets}>
        <PlanetInfoComponent />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    fontFamily: "Roboto",
    height: height,
    width: width,
    flex: 1,
    backgroundColor: colors.white,
  },
  planets: {
    width: "100%",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: height * 0.085,
  },
  test: {
    position: "absolute",
    width: "100%",
    alignItems: "center",
    top: height * 0.06,
  },
});
