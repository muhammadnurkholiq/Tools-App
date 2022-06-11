import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export default function Result({ result, setResult }) {
  // handleDelete
  const handleDelete = () => {
    if (result !== "Error") {
      if (result.length > 0) {
        if (result.length === 1) {
          setResult(0);
        } else {
          setResult(result.slice(0, -1));
        }
      } else {
        setResult(0);
      }
    } else {
      setResult(0);
    }
  };

  return (
    <>
      <View style={output.outputField}>
        <Text style={output.textOutput}>{result}</Text>
      </View>

      <View style={output.buttons}>
        <TouchableOpacity style={output.btnClear} onPress={() => setResult(0)}>
          <Text style={output.text}>Clear</Text>
        </TouchableOpacity>
        <TouchableOpacity style={output.btnDel} onPress={handleDelete}>
          <Text style={output.text}>Del</Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

// styling
const output = StyleSheet.create({
  outputField: {
    width: "95%",
    height: 70,
    backgroundColor: "#fff",
    borderRadius: 10,
    justifyContent: "center",
    alignSelf: "center",
    textAlign: "center",
    marginBottom: 30,
  },
  textOutput: {
    fontSize: 30,
    fontWeight: "700",
    borderRadius: 10,
    textAlign: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  btnClear: {
    backgroundColor: "#930707",
    width: "72%",
    padding: 15,
    margin: 5,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
  },
  btnDel: {
    backgroundColor: "#930707",
    width: "22%",
    padding: 15,
    marginTop: 5,
    marginRight: 5,
    marginBottom: 5,
    borderRadius: 10,
    alignItems: "center",
    alignContent: "center",
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});
