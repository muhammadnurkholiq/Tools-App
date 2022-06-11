import React, { useState, useEffect } from "react";
import { StyleSheet, View } from "react-native";

// API
import { API } from "../config/API";

// components
import Header from "../components/Todo/Header";
import Body from "../components/Todo/Body";

export default function Page2() {
  const [todos, setTodos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // get todos
  const getTodos = () => {
    API.get("/todos")
      .then((res) => {
        setTodos(res.data.data);
        setIsLoading(false);
      })
      .catch(() => {
        alert("Error fetch data");
        setIsLoading(false);
      });
  };

  // Create LifeCycle
  useEffect(() => {
    getTodos();
  }, []);

  return (
    <View style={todo.container}>
      <Header todos={todos} getTodos={getTodos} />
      <Body
        todos={todos}
        getTodos={getTodos}
        isLoading={isLoading}
        setIsLoading={setIsLoading}
      />
    </View>
  );
}

const todo = StyleSheet.create({
  container: {
    backgroundColor: "#e59090",
    height: "100%",
  },
});
