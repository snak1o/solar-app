import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";

// ICONS
import { Feather } from "@expo/vector-icons";

const { height } = Dimensions.get("screen");

export default function SettingsButtonComponent() {
  return (
    <TouchableOpacity style={styles.settings}>
      <Feather name="settings" size={24} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  settings: {
    position: "absolute",
    right: 16,
    top: height * 0.078,
  },
});
