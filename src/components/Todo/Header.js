import { useState } from "react";

// API
import { API } from "../../config/API";

import {
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
  Text,
  Keyboard,
  Alert,
} from "react-native";

export default function Header({ getTodos }) {
  const [form, setForm] = useState({
    activity: "",
  });

  // handle add
  const handleAdd = () => {
    Keyboard.dismiss();
    Alert.alert("Confirmation", "Are you sure want to add this activity?", [
      {
        text: "Yes",
        onPress: async () => {
          const config = {
            headers: {
              "Content-Type": "application/json",
            },
          };

          const data = JSON.stringify(form);

          API.post("/todos", data, config)
            .then((res) => {
              alert(res.data.message);
              getTodos();
              setForm({
                activity: "",
              });
            })
            .catch(() => {
              alert(error);
            });
        },
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <View style={header.container}>
      <TextInput
        style={header.input}
        placeholder="Create a new todo..."
        value={form.activity}
        onChangeText={(value) => {
          setForm((prevState) => ({ ...prevState, activity: value }));
        }}
      />
      <TouchableOpacity onPress={handleAdd} style={header.btnTodo}>
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
      width: 10,
      height: 10,
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
