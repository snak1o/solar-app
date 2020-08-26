import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  ImageBackground,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import colors from "../config/colors";
import { AntDesign } from "@expo/vector-icons";

const { height, width } = Dimensions.get("screen");

export default function WelcomeComponent({ navigation }) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/Background.png")}
    >
      <View style={styles.welcome__screen}>
        <View style={styles.welcome__screen__titles}>
          <Text style={styles.welcome__screen__title__secondary}>
            Buckle up
          </Text>
          <Text style={styles.welcome__screen__title__primary}>
            Begin your journey through the solar system.
          </Text>
        </View>
        <View style={styles.welcome__screen__continue}>
          <Text style={styles.welcome__screen__continue__title}>
            Ready for takeoff?
          </Text>
          <LinearGradient
            colors={["#ba463c", "#FA8F70"]}
            style={{ borderRadius: 8 }}
            end={[1, 0]}
          >
            <TouchableOpacity
              onPress={() => navigation.push("Home")}
              style={styles.welcome__screen__continue__button}
            >
              <Text style={styles.welcome__screen__continue__button__text}>
                Start now
              </Text>
              <AntDesign name="arrowright" size={24} color="white" />
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: colors.background,
  },
  welcome__screen: {
    fontFamily: "Roboto",
    alignItems: "center",
    flex: 1,
    justifyContent: "flex-end",
  },
  welcome__screen__titles: {
    alignItems: "center",
    marginBottom: height * 0.28,
    width: width * 0.74,
  },
  welcome__screen__title__secondary: {
    fontSize: 16,
    color: colors.white,
    opacity: 0.65,
    marginBottom: 8,
  },
  welcome__screen__title__primary: {
    fontSize: 32,
    color: colors.white,
    textAlign: "center",
  },
  welcome__screen__continue: {
    alignItems: "center",
    marginBottom: height * 0.13,
  },
  welcome__screen__continue__title: {
    color: colors.white,
    fontSize: 14,
    marginBottom: 16,
  },
  welcome__screen__continue__button: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 16,
    paddingBottom: 16,
    paddingLeft: 32,
    paddingRight: 32,
  },
  welcome__screen__continue__button__text: {
    fontSize: 16,
    color: colors.white,
    marginRight: 16,
  },
});
