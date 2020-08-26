import React, { useEffect } from "react";
import { StyleSheet, View, StatusBar, ImageBackground } from "react-native";

// REDUX
import store from "./src/store/index";
import { Provider } from "react-redux";

// CONFIG
import colors from "./src/config/colors";

// ACTION
import { getPlanets } from "./src/actions/planetsActions";

import NavigationComponent from "./src/components/NavigationComponent";
import { NavigationContainer } from "@react-navigation/native";

import { createStackNavigator } from "@react-navigation/stack";
import WelcomeComponent from "./src/components/WelcomeComponent";

const Stack = createStackNavigator();

export default function App() {
  StatusBar.setBarStyle("light-content");

  useEffect(() => {
    store.dispatch(getPlanets());
  }, []);

  return (
    <Provider store={store}>
      <NavigationContainer>
        <ImageBackground
          source={require("./assets/MainBackground.png")}
          style={styles.background}
        >
          <View style={styles.container}>
            <Stack.Navigator
              initialRouteName="Welcome"
              screenOptions={{ headerShown: false }}
            >
              <Stack.Screen
                options={{ gestureEnabled: false }}
                name="Home"
                component={NavigationComponent}
              />
              <Stack.Screen name="Welcome" component={WelcomeComponent} />
            </Stack.Navigator>
          </View>
        </ImageBackground>
      </NavigationContainer>
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
