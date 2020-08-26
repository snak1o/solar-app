// BASE IMPORT
import React from "react";
import { StyleSheet, View } from "react-native";

// REACT - NAVIGATION IMPORT
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

// CREATE BOTTOM TAB NAVIGATION
const Tab = createMaterialBottomTabNavigator();

// IMPORT SCREENS
import PlanetScreen from "../screens/PlanetScreen";
import HomeScreen from "../screens/HomeScreen";

// IMPORT COMPONENTS
import SoonComponent from "./SoonComponent";

// CONFIG
import colors from "../config/colors";

// ICONS
import { Feather, AntDesign } from "@expo/vector-icons";

export default function NavigationComponent() {
  return (
    <View style={styles.container}>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#FFFFFF"
        inactiveColor="rgba(255,255,255, 0.65)"
        shifting
        barStyle={{
          backgroundColor: colors.background,
          width: "100%",
        }}
      >
        <Tab.Screen
          name="HomePage"
          component={HomeScreen}
          options={{
            tabBarLabel: "Home",
            tabBarIcon: ({ color }) => (
              <Feather name="home" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Search"
          component={PlanetScreen}
          options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
              <Feather name="search" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Bookmarks"
          component={SoonComponent}
          options={{
            tabBarLabel: "Bookmarks",
            tabBarIcon: ({ color }) => (
              <Feather name="bookmark" color={color} size={24} />
            ),
          }}
        />
        <Tab.Screen
          name="Gallery"
          component={SoonComponent}
          options={{
            tabBarLabel: "Gallery",
            tabBarIcon: ({ color }) => (
              <AntDesign name="picture" color={color} size={24} />
            ),
          }}
        />
      </Tab.Navigator>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
