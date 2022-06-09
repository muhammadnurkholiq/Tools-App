import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { StyleSheet } from "react-native-web";

export default function Buttons(props) {
  const { value, bgColor, onPress } = props;

  return (
    <TouchableOpacity
      style={{
        backgroundColor: bgColor,
        margin: 5,
        width: "21.8%",
        height: "20%",
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
      onPress={() => {
        onPress(value);
      }}
    >
      <Text
        style={{
          color: "white",
          fontSize: 30,
          fontWeight: "700",
        }}
      >
        {value}
      </Text>
    </TouchableOpacity>
  );
}
