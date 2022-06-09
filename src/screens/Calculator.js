import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

// import components
import Buttons from "../components/calculator/Buttons";
import Result from "../components/calculator/Result";

export default function Calculator() {
  // usestate
  const [result, setResult] = useState(0);

  // press button
  const pressBtn = (value) => {
    if (result === 0 || result === "Error") {
      setResult(value);
    } else {
      setResult(result + value);
    }
  };

  // calculate value
  const calculate = () => {
    if (result !== "Error") {
      try {
        const calculate = eval(result);
        setResult(calculate);
      } catch (e) {
        if (e instanceof SyntaxError) {
          setResult("Error");
        }
      }
    } else {
      setResult("Error");
    }
  };

  // calculate percent
  const calcPercent = () => {
    if (result !== "Error") {
      try {
        const percentage = result / 100;
        setResult(percentage);
      } catch (e) {
        if (e instanceof SyntaxError) {
          setResult("Error");
        }
      }
    } else {
      setResult("Error");
    }
  };

  console.log(result);
  return (
    <View style={calc.container}>
      <View style={calc.resultContainer}>
        <Result result={result} setResult={setResult} />
      </View>

      <View style={calc.buttonsContainer}>
        <Buttons value="1" onPress={pressBtn} bgColor="#FF5757" />
        <Buttons value="2" onPress={pressBtn} bgColor="#FF5757" />
        <Buttons value="+" onPress={pressBtn} bgColor="#930707" />
        <Buttons value="-" onPress={pressBtn} bgColor="#930707" />

        <Buttons value="3" onPress={pressBtn} bgColor="#FF5757" />
        <Buttons value="4" onPress={pressBtn} bgColor="#FF5757" />
        <Buttons value="/" onPress={pressBtn} bgColor="#930707" />
        <Buttons value="*" onPress={pressBtn} bgColor="#930707" />

        <Buttons value="5" onPress={pressBtn} bgColor="#FF5757" />
        <Buttons value="6" onPress={pressBtn} bgColor="#FF5757" />
        <Buttons value="%" onPress={calcPercent} bgColor="#930707" />
        <Buttons value="=" onPress={calculate} bgColor="#930707" />

        <Buttons value="7" onPress={pressBtn} bgColor="#FF5757" />
        <Buttons value="8" onPress={pressBtn} bgColor="#FF5757" />
        <Buttons value="9" onPress={pressBtn} bgColor="#FF5757" />
        <Buttons value="0" onPress={pressBtn} bgColor="#FF5757" />
      </View>
    </View>
  );
}

const calc = StyleSheet.create({
  container: {
    backgroundColor: "#FFA0A0",
    height: "100%",
    justifyContent: "center",
  },
  resultContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    justifyContent: "center",
  },
  buttonsContainer: {
    paddingRight: 20,
    paddingLeft: 20,
    flexDirection: "row",
    flexWrap: "wrap",
  },
});
