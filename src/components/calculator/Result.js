import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { Box, Text } from "native-base";

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
      <Box style={output.outputField}>
        <Text style={output.textOutput}>{result}</Text>
      </Box>

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
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 40,
    alignItems: "center",
    justifyContent: "center",
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
  textOutput: {
    height: 30,
    fontSize: 30,
    fontWeight: "700",
    paddingTop: 10,
  },
  text: {
    color: "white",
    fontSize: 20,
    fontWeight: "700",
  },
});
