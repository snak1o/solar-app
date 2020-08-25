import React, { useEffect } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  ImageBackground,
  ActivityIndicator,
} from "react-native";

// REDUX
import store from "./src/store/index";
import { Provider } from "react-redux";

// CONFIG
import colors from "./src/config/colors";

// ACTION
import { getPlanets } from "./src/actions/planetsActions";
import NavigationComponent from "./src/components/NavigationComponent";

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
          <NavigationComponent />
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
