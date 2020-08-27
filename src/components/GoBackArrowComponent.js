// BASE IMPORT
import React from "react";
import { TouchableOpacity, StyleSheet, Dimensions } from "react-native";

// ICONS
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

// GET CURRENT SCREEN HEIGHT
const { height } = Dimensions.get("screen");

export default function SettingsButtonComponent() {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.settings}
      onPress={() => navigation.goBack()}
    >
      <Feather name="arrow-left" size={28} color="white" />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  settings: {
    position: "absolute",
    left: 16,
    top: height * 0.078,
  },
});
