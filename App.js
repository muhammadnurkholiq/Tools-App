import * as React from "react";
// statusbar
import { StatusBar } from "react-native";

// container
import Container from "./Container";

export default function App() {
  return (
    <>
      <StatusBar backgroundColor="#FFA0A0" />
      <Container />
    </>
  );
}
