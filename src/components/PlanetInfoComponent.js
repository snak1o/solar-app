import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";
import colors from "../config/colors";

export default function PlanetInfoComponent() {
  return (
    <View style={styles.information}>
      <View style={styles.header}>
        <Text style={styles.title}>Mars</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={{ marginRight: 16 }}>
            <Feather name="bookmark" size={24} color={colors.background} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Feather name="share-2" size={24} color={colors.background} />
          </TouchableOpacity>
        </View>
      </View>
      <Text style={styles.description}>
        Mars is the fourth planet from the Sun, the second smallest in the Solar
        System. Named after the Roman god of war, it is often described as the
        "Red Planet" because the iron oxide prevalent on its surface gives it a
        reddish appearance.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  information: {
    width: "100%",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 40,
  },
  title: {
    fontSize: 32,
    color: colors.background,
  },
  actions: {
    flexDirection: "row",
  },
  description: {
    color: colors.background,
    opacity: 0.75,
  },
});
