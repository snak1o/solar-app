import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Platform,
  StatusBar,
} from "react-native";
import WelcomeComponent from "./components/WelcomeComponent";
import colors from "./config/colors";

export default function App() {
  StatusBar.setBarStyle("light-content");
  return (
    <View style={styles.container}>
      <WelcomeComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
});
