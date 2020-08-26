// BASE IMPORT
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { ScrollView } from "react-native-gesture-handler";

// IMPORT COLLAPSIBLE DROPDOWN
import Collapsible from "react-native-collapsible";

// ICONS
import { Feather, Ionicons } from "@expo/vector-icons";

// CONFIG
import colors from "../config/colors";

// GET CURRENT SCREEN HEIGHT AND WIDTH
const { height, width } = Dimensions.get("screen");

export default function PlanetInfoComponent() {
  // STATE FOR SHOW/HIDE COLLAPSIBLE DROPDOWN (for each dropdown we have one state in obj below)
  const [isCollapsed, setIsCollapsed] = useState({
    introduction: true,
    physical: true,
    geography: true,
  });

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
      <ScrollView
        showsHorizontalScrollIndicatorw={false}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.info}>
          Mars is the fourth planet from the Sun, the second smallest in the
          Solar System. Named after the Roman god of war, it is often described
          as the "Red Planet" because the iron oxide prevalent on its surface
          gives it a reddish appearance.
        </Text>
        {/* INTRODUCTION DROPDOWN */}
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.dropdown__header}
            onPress={() =>
              setIsCollapsed({
                ...isCollapsed,
                introduction: !isCollapsed.introduction,
              })
            }
          >
            <Ionicons
              style={{ marginRight: 16 }}
              name="ios-arrow-down"
              size={24}
              color={colors.background}
            />
            <Text style={styles.dropdown__title}>Introduction</Text>
          </TouchableOpacity>
          <Collapsible collapsed={isCollapsed.introduction}>
            <Text style={{ color: colors.background, opacity: 0.65 }}>
              скоро будет текст
            </Text>
          </Collapsible>
        </View>
        {/* PHYSICAL DROPDOWN */}
        <View style={styles.dropdown}>
          <TouchableOpacity
            style={styles.dropdown__header}
            onPress={() =>
              setIsCollapsed({
                ...isCollapsed,
                physical: !isCollapsed.physical,
              })
            }
          >
            <Ionicons
              style={{ marginRight: 16 }}
              name="ios-arrow-down"
              size={24}
              color={colors.background}
            />
            <Text style={styles.dropdown__title}>Physical characteristics</Text>
          </TouchableOpacity>
          <Collapsible collapsed={isCollapsed.physical}>
            <Text style={{ color: colors.background, opacity: 0.65 }}>
              скоро будет текстскоро будет текстскоро будет текстскоро будет
              текстскоро будет текстскоро будет текст
            </Text>
          </Collapsible>
        </View>
        {/* GEO DROPDOWN */}
        <View style={[styles.dropdown, styles.dropdown__geo]}>
          <TouchableOpacity
            style={styles.dropdown__header}
            onPress={() =>
              setIsCollapsed({
                ...isCollapsed,
                geography: !isCollapsed.geography,
              })
            }
          >
            <Ionicons
              style={{ marginRight: 16 }}
              name="ios-arrow-down"
              size={24}
              color={colors.background}
            />
            <Text style={styles.dropdown__title}>Geography</Text>
          </TouchableOpacity>
          <Collapsible collapsed={isCollapsed.geography}>
            <Text style={{ color: colors.background, opacity: 0.65 }}>
              скоро будет текстскоро будет текстскоро будет текстскоро будет
              текстскоро будет текстскоро будет текстскоро будет текстскоро
              будет текстскоро будет текстскоро будет текстскоро будет
              текстскоро будет текстскоро будет текстскоро будет текстскоро
              будет текстскоро будет текстскоро будет текстскоро будет текст
            </Text>
          </Collapsible>
        </View>
      </ScrollView>
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
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "rgba(21, 21, 21, 0.1)",
    paddingBottom: 5,
  },
  title: {
    fontSize: 32,
    color: colors.background,
  },
  actions: {
    flexDirection: "row",
  },
  info: {
    color: colors.background,
    opacity: 0.75,
    marginBottom: 40,
    marginTop: 10,
  },
  dropdown: {
    borderBottomWidth: 1,
    borderBottomColor: "rgba(21, 21, 21, 0.1)",
    paddingBottom: 20,
    marginBottom: 20,
  },
  dropdown__header: {
    flexDirection: "row",
    alignItems: "center",
  },
  dropdown__geo: {
    borderBottomWidth: 0,
    borderBottomColor: 0,
    paddingBottom: 0,
    marginBottom: height * 0.46,
  },
  dropdown_title: {
    fontSize: 16,
    fontWeight: "600",
    color: colors.background,
  },
});
