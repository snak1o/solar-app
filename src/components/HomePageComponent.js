import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  ImageBackground,
  ActivityIndicator,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";

// CONFIG
import colors from "../config/colors";

// ICONS
import { Feather, FontAwesome, Ionicons, AntDesign } from "@expo/vector-icons";

// REDUX
import { useSelector } from "react-redux";
import PlanetComponent from "./PlanetComponent";

function HomePageComponent() {
  const loading = useSelector((state) => state.loader.loading);

  const planets = useSelector((state) => state.planets.planets[0]);

  const Test = () => {
    if (loading) return <ActivityIndicator />;

    return planets.map((planet) => (
      <PlanetComponent planet={planet} key={Math.random()} />
    ));
  };

  return (
    <ImageBackground
      style={styles.background}
      source={require("../../assets/MainBackground.png")}
    >
      <View style={styles.container}>
        <View style={styles.homepage__main}>
          <View style={styles.homepage__appbar}>
            <View style={styles.homepage__appbar__settings}>
              <Text style={styles.homepage__appbar__welcome}>
                Ola,{" "}
                <Text style={styles.homepage__appbar__welcome__name}>
                  Nikish Ryazanov
                </Text>
              </Text>
              <TouchableOpacity>
                <Feather name="settings" size={24} color="white" />
              </TouchableOpacity>
            </View>
            <Text style={styles.homepage__appbar__question}>
              What are you going to learn today?
            </Text>
          </View>
          <View style={styles.homepage__search}>
            <FontAwesome name="search" size={20} color="white" />
            <TextInput
              placeholder="Look for planets, asteroids, stars..."
              placeholderTextColor={colors.white}
              style={{ marginLeft: 16, color: colors.white }}
            />
          </View>
        </View>
        <ScrollView style={{ overflow: "hidden" }}>
          <View style={styles.homepage__categories}>
            <Text style={styles.homepage__categories__title}>Categories</Text>
            <View style={styles.homepage__categories__blocks}>
              <LinearGradient
                colors={["#5935FF", "#47408E"]}
                style={styles.homepage__categories__block}
              >
                <Ionicons name="md-planet" size={32} color="white" />
                <Text style={styles.homepage__categories__block__name}>
                  Planets
                </Text>
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
                <Text style={styles.homepage__categories__block__name}>
                  Stars
                </Text>
              </LinearGradient>
              <LinearGradient
                colors={["#F9C270", "#FFAA2B"]}
                style={styles.homepage__categories__block}
              >
                <Ionicons name="md-planet" size={32} color="white" />
                <Text style={styles.homepage__categories__block__name}>
                  Galaxies
                </Text>
              </LinearGradient>
            </View>
          </View>
          <View style={styles.homepage__planets}>
            <Text style={styles.homepage__planets__title}>Planets</Text>
            <ScrollView
              horizontal={true}
              style={styles.homepage__planets__blocks}
            >
              <Test />
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    </ImageBackground>
  );
}

export default HomePageComponent;

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: colors.background,
  },
  container: {
    fontFamily: "Roboto",
    height: "100%",
  },
  homepage__main: {
    paddingLeft: 20,
    paddingRight: 20,
  },
  //Элемент настроек, приветствия
  homepage__appbar: {
    marginTop: 50,
    marginBottom: 55,
  },
  homepage__appbar__settings: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 4,
  },
  homepage__appbar__welcome: {
    color: colors.white,
    fontSize: 28,
    fontWeight: "bold",
  },
  homepage__appbar__welcome__name: {
    color: "#FF6CD9",
  },
  homepage__appbar__question: {
    color: colors.white,
    fontSize: 16,
  },
  // Элемент поиска
  homepage__search: {
    flexDirection: "row",
    alignItems: "center",
    fontSize: 14,
    backgroundColor: colors.background,
    borderRadius: 8,
    width: "100%",
    height: 50,
    paddingLeft: 20,
    marginBottom: 15,
  },
  // Элемент выбора категорий
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
  // Элемент скролла планет
  homepage__planets: {
    width: "100%",
  },
  homepage__planets__title: {
    color: colors.white,
    fontSize: 16,
    paddingLeft: 16,
    marginBottom: 25,
  },
  homepage__planets__blocks: {
    flexDirection: "row",
    overflow: "hidden",
  },
});
