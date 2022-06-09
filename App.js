import React from "react";
import { StatusBar } from "expo-status-bar";
import { NativeBaseProvider } from "native-base";

// screen
import Calculator from "./src/screens/Calculator";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar style="auto" />
      <Calculator />
    </NativeBaseProvider>
  );
}
