import { useState, useEffect } from "react";

// statusbar
import { Image, StatusBar, View, StyleSheet } from "react-native";

// container
import Container from "./Container";

// images
import Splash from "./src/assets/images/splash.png";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Wait for 3 seconds
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <View>
          <StatusBar hidden={true} />
          <Image source={Splash} style={app.img} />
        </View>
      ) : (
        <>
          <StatusBar backgroundColor="#FFA0A0" />
          <Container />
        </>
      )}
    </>
  );
}

const app = StyleSheet.create({
  img: {
    width: "100%",
    height: "100%",
  },
});
