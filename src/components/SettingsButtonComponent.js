import React from "react";
import { TouchableOpacity } from "react-native";

// ICONS
import { Feather } from "@expo/vector-icons";

export default function SettingsButtonComponent() {
  return (
    <TouchableOpacity>
      <Feather name="settings" size={24} color="white" />
    </TouchableOpacity>
  );
}
