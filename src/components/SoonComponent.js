// BASE IMPORT
import React from "react";
import { StyleSheet, Text, View } from "react-native";

// CONFIG
import colors from "../config/colors";

export default function SoonComponent() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Will be soon</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.background,
  },
  text: {
    fontSize: 30,
    color: colors.white,
  },
});
