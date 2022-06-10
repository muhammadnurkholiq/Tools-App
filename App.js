import * as React from "react";
// NativeBaseProvider
import { NativeBaseProvider, extendTheme } from "native-base";

// statusbar
import { StatusBar } from "react-native";

// container
import Container from "./Container";

export default function App() {
  // Setup Custome Theme
  // const customeColor = {
  //   primary: {
  //     50: "#E3F2F9",
  //     100: "#C5E4F3",
  //     200: "#A2D4EC",
  //     300: "#7AC1E4",
  //     400: "#47A9DA",
  //     500: "#0088CC",
  //     600: "#007AB8",
  //     700: "#006BA1",
  //     800: "#005885",
  //     900: "#003F5E",
  //   },
  //   amber: {
  //     400: "#d97706",
  //   },
  // };

  // Configuration Native Base Custom Theme
  // const theme = extendTheme({
  //   colors: customeColor,
  //   config: { initialColorMode: "dark" },
  // });

  return (
    <NativeBaseProvider>
      <StatusBar backgroundColor="#FFA0A0" animated={true} />
      <Container />
    </NativeBaseProvider>
  );
}
