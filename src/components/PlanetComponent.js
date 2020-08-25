import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

// CONFIG
import colors from "../config/colors";

// ICONS
import { AntDesign } from "@expo/vector-icons";

export default function PlanetComponent() {
  return (
    <TouchableOpacity>
      <View style={styles.homepage__planets__block}>
        <Image
          source={require("../../assets/Planets/Sun.png")}
          style={styles.homepage__planets__block__image}
        />
        <View style={styles.homepage__planets__block__nav}>
          <Text style={styles.homepage__planets__block__text}>Sun</Text>
          <AntDesign name="arrowright" size={24} color="#EF5F53" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  homepage__planets__block: {
    width: 140,
    height: 190,
    backgroundColor: colors.background,
    paddingLeft: 16,
    paddingBottom: 16,
    paddingRight: 16,
    flexDirection: "row",
    alignItems: "flex-end",
    borderRadius: 8,
    position: "relative",
    marginLeft: 16,
  },
  homepage__planets__block__image: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 8,
  },
  homepage__planets__block__nav: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  homepage__planets__block__text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
