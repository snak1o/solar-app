// BASE IMPORT
import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

// CONFIG
import colors from "../../config/colors";
import ip from "../../config/ip";

// ICONS
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function PlanetComponent({ planet }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("PlanetInfoScreen", { planet })}
    >
      <View style={styles.planet__block}>
        <Image
          source={{
            uri: `http://${ip}/${planet.planetImage}`,
            width: 110,
            height: 134,
          }}
          style={styles.planet__block__image}
        />
        <View style={styles.planet__block__nav}>
          <Text style={styles.planet__block__text}>{planet.name}</Text>
          <AntDesign name="arrowright" size={24} color="#EF5F53" />
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  planet__block: {
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
  planet__block__image: {
    position: "absolute",
    top: 0,
    left: 0,
    borderTopLeftRadius: 8,
  },
  planet__block__nav: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
  },
  planet__block__text: {
    color: colors.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});
