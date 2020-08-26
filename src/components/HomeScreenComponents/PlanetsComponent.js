// BASE IMPORT
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";

// REDUX IMPORT
import { useSelector } from "react-redux";

// IMPORT COMPONENTS
import PlanetComponent from "./PlanetComponent";

// CONFIG
import colors from "../../config/colors";

export default function PlanetsComponent() {
  // GET THE LOADING STATE FROM GLOBAL STATE WITH REDUX
  const loading = useSelector((state) => state.loader.loading);

  // GET THE ALL PLANETS FROM GLOBAL STATE WITH REDUX
  const planets = useSelector((state) => state.planets.planets[0]);

  // MAP planets VAR TO DISPLAY ALL PLANETS (or loading component if loading == true)
  const Planets = () => {
    if (loading) return <ActivityIndicator />;
    return planets.map((planet) => (
      <PlanetComponent planet={planet} key={Math.random()} />
    ));
  };
  return (
    <View style={styles.planets}>
      <Text style={styles.planets__title}>Planets</Text>
      <ScrollView
        horizontal={true}
        style={styles.planets__blocks}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <Planets />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  planets: {
    width: "100%",
    marginBottom: 25,
  },
  planets__title: {
    color: colors.white,
    fontSize: 16,
    paddingLeft: 16,
    marginBottom: 25,
  },
  planets__blocks: {
    flexDirection: "row",
    overflow: "hidden",
  },
});
