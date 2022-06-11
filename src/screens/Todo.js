import { StyleSheet, View } from "react-native";

// components
import Header from "../components/Todo/Header";
import Body from "../components/Todo/Body";

export default function Page2() {
  return (
    <View style={todo.container}>
      <Header />
      <Body />
    </View>
  );
}

const todo = StyleSheet.create({
  container: {
    backgroundColor: "#e59090",
    height: "100%",
  },
});
