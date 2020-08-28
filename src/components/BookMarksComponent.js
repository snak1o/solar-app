// BASE IMPORT
import React from "react";
import { TouchableOpacity } from "react-native";

// ICONS
import { Feather } from "@expo/vector-icons";
export default function SettingsButtonComponent() {
  return (
    <TouchableOpacity>
      <Feather name="bookmark" color="rgba(255,255,255, 0.65)" size={24} />
    </TouchableOpacity>
  );
}
