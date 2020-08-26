import React from "react";
import { StyleSheet, TextInput, View } from "react-native";

import colors from "../../config/colors";

import { FontAwesome } from "@expo/vector-icons";

export default function SearchComponent() {
  return (
    <View style={styles.search}>
      <FontAwesome name="search" size={20} color="white" />
      <TextInput
        placeholder="Look for planets, asteroids, stars..."
        placeholderTextColor={colors.white}
        style={{
          marginLeft: 16,
          color: colors.white,
          flex: 1,
          height: "100%",
          opacity: 0.7,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,
    backgroundColor: colors.background,
    borderRadius: 8,
    maxWidth: "100%",
    height: 50,
    paddingLeft: 20,
    marginBottom: 15,
  },
});
