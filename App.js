import React, { useEffect } from "react";
import { StyleSheet, View, StatusBar, ImageBackground } from "react-native";

// REDUX
import store from "./src/store/index";
import { Provider } from "react-redux";
// COMPONENTS
import WelcomeComponent from "./src/components/WelcomeComponent";
import HomePageComponent from "./src/components/HomePageComponent";

// CONFIG
import colors from "./src/config/colors";

// ACTION
import { getPlanets } from "./src/actions/planetsActions";

export default function App() {
  StatusBar.setBarStyle("light-content");

  useEffect(() => {
    store.dispatch(getPlanets());
  }, []);

  return (
    <Provider store={store}>
      <ImageBackground
        source={require("./assets/MainBackground.png")}
        style={styles.background}
      >
        <View style={styles.container}>
          <HomePageComponent />
        </View>
      </ImageBackground>
    </Provider>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: "cover",
    backgroundColor: colors.background,
  },
  container: {
    flex: 1,
  },
});
