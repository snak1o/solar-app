import React from "react";
import { StyleSheet, Text, View } from "react-native";

// CONFIG
import colors from "../../config/colors";

export default function HomepageAppbarComponent() {
  return (
    <View style={styles.appbar}>
      <View style={styles.appbar__settings}>
        <Text style={styles.appbar__welcome}>
          Ola, <Text style={styles.appbar__welcome__name}>Nikish Ryazanov</Text>
        </Text>
      </View>
      <Text style={styles.appbar__question}>
        What are you going to learn today?
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  contaner: {
    flex: 1,
  },
  appbar: {
    marginTop: 50,
    marginBottom: 55,
  },
  appbar__settings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  appbar__welcome: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "bold",
  },
  appbar__welcome__name: {
    color: "#FF6CD9",
  },
  appbar__question: {
    color: colors.white,
    fontSize: 16,
  },
});
