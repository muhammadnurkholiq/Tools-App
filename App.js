import * as React from "react";
// NativeBaseProvider
import { NativeBaseProvider } from "native-base";
// statusbar
import { StatusBar } from "react-native";

// container
import Container from "./Container";

export default function App() {
  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#FFA0A0" animated={true} />
      <Container />
    </NativeBaseProvider>
  );
}
