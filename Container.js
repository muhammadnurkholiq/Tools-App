import * as React from "react";

// navigation container
import { NavigationContainer } from "@react-navigation/native";

// stack navigation
import { createStackNavigator } from "@react-navigation/stack";

// theme native base
// import { useTheme } from "native-base";

// screen
import Calculator from "./src/screens/Calculator";
import Page2 from "./src/screens/Page2";

// create stack navigation
const Stack = createStackNavigator();

export default function Container() {
  // init theme
  // const theme = useTheme();

  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Calculator"
        screenOptions={{
          headerStyle: { backgroundColor: "#FFA0A0" },
          headerTitleStyle: {
            fontWeight: "800",
            fontSize: 30,
            letterSpacing: 1,
            color: "#fff",
          },
          headerTitleAlign: "center",
        }}
      >
        <Stack.Screen name="Calculator" component={Calculator} />
        <Stack.Screen name="Page2" component={Page2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
