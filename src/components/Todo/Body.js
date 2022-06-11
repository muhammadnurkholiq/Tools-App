import React, { useState } from "react";
import {
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  TextInput,
} from "react-native";

// icon
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export default function Body() {
  const [isDone, setIsDone] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  // handle done for status
  const handleStatus = async (e) => {
    try {
      setIsDone(!isDone);
    } catch (error) {
      console.log(error);
    }
  };

  // handle edit
  const handleEdit = async (e) => {
    try {
      setIsEdit(!isEdit);
    } catch (error) {
      console.log(error);
    }
  };

  // handle update
  const handleUpdate = async (e) => {
    try {
      setIsEdit(!isEdit);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView style={body.container}>
      {/* todo  */}
      <View style={body.todo} key={1}>
        {isEdit ? (
          <>
            <TextInput
              style={body.editTextInput}
              placeholder="Create a new todo..."
            />
            <TouchableOpacity onPress={handleUpdate} style={body.editBtn}>
              <Text style={body.editTextBtn}>Submit</Text>
            </TouchableOpacity>
          </>
        ) : (
          <>
            {/* checkbox  */}
            <View style={body.todoStatus}>
              <TouchableOpacity onPress={handleStatus}>
                {isDone === true ? (
                  <MaterialIcons name="check-box" style={body.todoBtn} />
                ) : (
                  <MaterialIcons
                    name="check-box-outline-blank"
                    style={body.todoBtn}
                  />
                )}
              </TouchableOpacity>
            </View>
            {/* text */}
            <ScrollView
              style={body.todoText}
              contentContainerStyle={{ flexGrow: 1, justifyContent: "center" }}
            >
              <Text style={body.text}>hello world</Text>
            </ScrollView>
            {/* edit  */}
            <View style={body.todoAction}>
              <TouchableOpacity onPress={handleEdit}>
                <Feather name="edit" style={body.todoBtn} />
              </TouchableOpacity>
            </View>
            <View style={body.todoAction}>
              <TouchableOpacity>
                <FontAwesome5 name="trash-alt" style={body.todoBtn} />
              </TouchableOpacity>
            </View>
          </>
        )}
      </View>
    </ScrollView>
  );
}

const body = StyleSheet.create({
  container: {
    marginTop: 10,
    paddingTop: 10,
  },
  todo: {
    width: "85%",
    height: 90,
    flexDirection: "row",
    padding: 10,
    marginBottom: 20,
    backgroundColor: "#FFA0A0",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 2,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    alignSelf: "center",
    justifyContent: "space-between",
  },
  // data
  todoStatus: {
    width: "10%",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  todoText: {
    width: "60%",
    marginStart: 5,
    paddingRight: 5,
  },
  text: {
    fontWeight: "700",
    fontSize: 17,
  },
  todoAction: {
    width: "15%",
    height: "100%",
    justifyContent: "center",
  },
  todoBtn: {
    width: "100%",
    fontSize: 25,
    textAlign: "center",
  },
  // edit
  editTextInput: {
    width: "70%",
    height: "70%",
    backgroundColor: "#fff",
    borderRadius: 15,
    paddingLeft: 10,
    paddingRight: 10,
    alignSelf: "center",
  },
  editBtn: {
    width: "25%",
    height: "70%",
    backgroundColor: "#FF5757",
    alignSelf: "center",
    justifyContent: "center",
    borderRadius: 15,
  },
  editTextBtn: {
    textAlign: "center",
    color: "#fff",
    fontWeight: "700",
    letterSpacing: 1,
  },
});
