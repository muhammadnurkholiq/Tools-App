import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

export default function Header() {
  return (
    <View style={header.container}>
      <TextInput style={header.input} placeholder="Create a new todo..." />
      <TouchableOpacity style={header.btnTodo}>
        <Text style={header.btnTodoText}>ADD TODO</Text>
      </TouchableOpacity>
    </View>
  );
}

const header = StyleSheet.create({
  container: {
    backgroundColor: "#FFA0A0",
    padding: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    borderBottomLeftRadius: 80,
    borderBottomRightRadius: 80,
  },
  input: {
    backgroundColor: "#fff",
    width: "80%",
    alignSelf: "center",
    padding: 15,
    textAlign: "center",
    borderRadius: 10,
    textAlign: "center",
    fontWeight: "700",
    letterSpacing: 1,
  },
  btnTodo: {
    marginTop: 20,
    backgroundColor: "#FF5757",
    width: "32%",
    alignSelf: "center",
    padding: 10,
    borderRadius: 10,
  },
  btnTodoText: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 1,
  },
});
