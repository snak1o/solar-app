import React from "react";
import { StyleSheet, View, StatusBar, ImageBackground } from "react-native";
import { createStore } from "redux";
import { Provider } from "react-redux";

// ИМПОРТ КОМПОНЕНТОВ
import WelcomeComponent from "./src/components/WelcomeComponent";
import HomePageComponent from "./src/components/HomePageComponent";

// ИМПОРТ КОНФИГ ФАЙЛОВ
import colors from "./src/config/colors";

const initialState = {
  counter: 0,
};

const reducer = (state = initialState) => {
  return state;
};

const store = createStore(reducer);

export default function App() {
  StatusBar.setBarStyle("light-content");
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
