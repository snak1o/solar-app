//BASE IMPORT
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
} from "react-native";

//COLORS
import colors from "../config/colors";

//COMPONENTS
import BookMarksComponent from "./BookMarksComponent";

//ICONS
import { AntDesign } from "@expo/vector-icons";

// GET CURRENT SCREEN HEIGHT AND WIDTH
const { height, width } = Dimensions.get("screen");

export default function PlanetCardComponent() {
  return (
    <View style={styles.card}>
      <Image
        style={{ borderTopLeftRadius: 8 }}
        source={require("../img/Neptune.png")}
      />
      <View style={styles.main}>
        <View style={styles.header}>
          <Text style={styles.name}>Netuno</Text>
          <BookMarksComponent />
        </View>
        <Text style={styles.desc}>
          Neptune is the eighth planet in the Solar System, the last from the
          Sun since the reclassification...
        </Text>
        <TouchableOpacity style={styles.continue}>
          <Text style={styles.continue__text}>Keep reading</Text>
          <AntDesign name="arrowright" size={24} color="#EF5F53" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.background,
    height: height * 0.22,
    borderRadius: 8,
    flexDirection: "row",
    width: width * 0.9,
  },
  main: {
    marginLeft: 16,
    justifyContent: "center",
    width: width * 0.42,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingBottom: 8,
  },
  name: {
    fontSize: 27,
    color: colors.white,
  },
  desc: {
    color: colors.white,
    opacity: 0.65,
    paddingBottom: 20,
  },
  continue: {
    flexDirection: "row",
    alignItems: "center",
  },
  continue__text: {
    color: colors.white,
    paddingRight: 8,
  },
});
