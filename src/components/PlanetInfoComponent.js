import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { Feather } from "@expo/vector-icons";

export default function PlanetInfoComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.information}>
        <View style={styles.header}>
          <Text style={styles.title}>Mars</Text>
          <View style={styles.actions}>
            <TouchableOpacity>
              <Feather name="bookmark" size={24} color="black" />
            </TouchableOpacity>
            <TouchableOpacity>
              <Feather name="share-2" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
        <Text style={styles.description}>
          Mars is the fourth planet from the Sun, the second smallest in the
          Solar System. Named after the Roman god of war, it is often described
          as the "Red Planet" because the iron oxide prevalent on its surface
          gives it a reddish appearance.
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  information: {},
  header: {},
  title: {},
  actions: {},
  description: {},
});
