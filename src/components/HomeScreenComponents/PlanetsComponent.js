import React from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  ActivityIndicator,
} from "react-native";
import PlanetComponent from "./PlanetComponent";

import { useSelector } from "react-redux";
// Config
import colors from "../../config/colors";

export default function PlanetsComponent() {
  const loading = useSelector((state) => state.loader.loading);

  const planets = useSelector((state) => state.planets.planets[0]);

  const Planets = () => {
    if (loading) return <ActivityIndicator />;

    return planets.map((planet) => (
      <PlanetComponent planet={planet} key={Math.random()} />
    ));
  };
  return (
    <View style={styles.planets}>
      <Text style={styles.planets__title}>Planets</Text>
      <ScrollView horizontal={true} style={styles.planets__blocks}>
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
