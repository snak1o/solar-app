import React from "react";
import { StyleSheet, Text, View } from "react-native";

// Градиент
import { LinearGradient } from "expo-linear-gradient";

// Иконки
import { Ionicons, AntDesign } from "@expo/vector-icons";

// Config
import colors from "../../config/colors";

export default function CategoriesComponent() {
  return (
    <View style={styles.homepage__categories}>
      <Text style={styles.homepage__categories__title}>Categories</Text>
      <View style={styles.homepage__categories__blocks}>
        <LinearGradient
          colors={["#5935FF", "#47408E"]}
          style={styles.homepage__categories__block}
        >
          <Ionicons name="md-planet" size={32} color="white" />
          <Text style={styles.homepage__categories__block__name}>Planets</Text>
        </LinearGradient>
        <LinearGradient
          colors={["#FF6CD9", "#FF2184"]}
          style={styles.homepage__categories__block}
        >
          <Ionicons name="md-planet" size={32} color="white" />
          <Text style={styles.homepage__categories__block__name}>
            Asteroids
          </Text>
        </LinearGradient>
        <LinearGradient
          colors={["#01D4E4", "#009DE0"]}
          style={styles.homepage__categories__block}
        >
          <AntDesign name="star" size={32} color="white" />
          <Text style={styles.homepage__categories__block__name}>Stars</Text>
        </LinearGradient>
        <LinearGradient
          colors={["#F9C270", "#FFAA2B"]}
          style={styles.homepage__categories__block}
        >
          <Ionicons name="md-planet" size={32} color="white" />
          <Text style={styles.homepage__categories__block__name}>Galaxies</Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  homepage__categories: {
    marginTop: 35,
    marginBottom: 50,
    paddingLeft: 16,
    paddingRight: 16,
  },
  homepage__categories__title: {
    fontSize: 16,
    color: colors.white,
    marginBottom: 24,
  },
  homepage__categories__blocks: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  homepage__categories__block: {
    width: 80,
    height: 80,
    borderRadius: 8,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  homepage__categories__block__name: {
    color: colors.white,
    fontSize: 14,
    textAlign: "center",
  },
});
