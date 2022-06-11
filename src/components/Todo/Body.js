import React, { useState } from "react";
import {
  StyleSheet,
  Alert,
  TouchableOpacity,
  Text,
  View,
  TextInput,
  FlatList,
  RefreshControl,
} from "react-native";

// API
import { API } from "../../config/API";

// icon
import { Feather, FontAwesome5, MaterialIcons } from "@expo/vector-icons";

export default function Body({ todos, getTodos, isLoading, setIsLoading }) {
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);
  const [form, setForm] = useState({
    activity: "",
    status: "",
  });

  // Create Component List
  const renderTodos = ({ item }) => {
    return (
      <>
        {/* todo  */}
        <View style={body.todo} key={item.id}>
          {isEdit && item.id === id ? (
            <>
              <TextInput
                style={body.editTextInput}
                placeholder="Create a new todo..."
                value={form.activity}
                onChangeText={(value) => {
                  setForm((prevState) => ({ ...prevState, activity: value }));
                }}
              />
              <TouchableOpacity
                onPress={() => {
                  handleUpdate(item.id);
                }}
                style={body.editBtn}
              >
                <Text style={body.editTextBtn}>Submit</Text>
              </TouchableOpacity>
            </>
          ) : (
            <>
              {/* checkbox  */}
              <View style={body.todoStatus}>
                <TouchableOpacity
                  onPress={() => {
                    handleStatus(item.status, item.id);
                  }}
                >
                  {item.status === "finished" ? (
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
              <Text style={body.text}>{item.activity}</Text>
              {/* edit  */}
              <View style={body.todoAction}>
                <TouchableOpacity
                  onPress={() => {
                    handleEdit(item.id);
                  }}
                >
                  <Feather name="edit" style={body.todoBtn} />
                </TouchableOpacity>
              </View>
              <View style={body.todoAction}>
                <TouchableOpacity
                  onPress={() => {
                    handleDelete(item.id);
                  }}
                >
                  <FontAwesome5 name="trash-alt" style={body.todoBtn} />
                </TouchableOpacity>
              </View>
            </>
          )}
        </View>
      </>
    );
  };

  // handle done for status
  const handleStatus = (status, id) => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to change the status of this activity?",
      [
        {
          text: "Yes",
          onPress: async () => {
            setIsLoading(true);
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            };

            let updateStatus = {
              status: "",
            };

            if (status === "unfinished") {
              updateStatus = {
                status: "finished",
              };
            } else {
              updateStatus = {
                status: "unfinished",
              };
            }

            const data = JSON.stringify(updateStatus);

            API.patch(`/todos/${id}`, data, config)
              .then((res) => {
                if (updateStatus.status === "finished") {
                  Alert.alert(res.data.status, "You completed your activity!");
                } else {
                  Alert.alert(
                    res.data.status,
                    "You haven't finished your activity!"
                  );
                }
                getTodos();
                setIsLoading(false);
              })
              .catch(() => {
                alert("Error fetch data");
              });
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  // handle edit
  const handleEdit = (id) => {
    setIsLoading(true);
    setId(id);
    API.get(`/todos/${id}`).then((res) => {
      setForm({
        activity: res.data.data.activity,
        status: res.data.data.status,
      });
      setIsLoading(false);
      setIsEdit(true);
    });
  };

  // handle update
  const handleUpdate = (id) => {
    Alert.alert(
      "Confirmation",
      "Are you sure you want to change your activity?",
      [
        {
          text: "Yes",
          onPress: async () => {
            setIsLoading(true);
            const config = {
              headers: {
                "Content-Type": "application/json",
              },
            };

            const data = JSON.stringify(form);

            API.patch(`/todos/${id}`, data, config)
              .then((res) => {
                Alert.alert(
                  res.data.status,
                  "Your activity has been successfully updated!"
                );
                setIsEdit(false);
                getTodos();
                setIsLoading(false);
              })
              .catch(() => {
                alert("Error");
              });
          },
        },
        {
          text: "No",
        },
      ]
    );
  };

  // handle delete
  const handleDelete = (id) => {
    Alert.alert("Confirmation", "Are you sure want to delete this activity?", [
      {
        text: "Yes",
        onPress: async () => {
          setIsLoading(true);
          API.delete(`/todos/${id}`)
            .then((res) => {
              Alert.alert(
                res.data.status,
                "Activity data deleted successfully!"
              );
              getTodos();
              setIsLoading(false);
            })
            .catch(() => {
              alert("Error");
            });
        },
      },
      {
        text: "No",
      },
    ]);
  };

  return (
    <FlatList
      style={body.container}
      data={todos}
      renderItem={renderTodos}
      keyExtractor={(item) => item.id.toString()}
      refreshControl={
        <RefreshControl refreshing={isLoading} onRefresh={getTodos} />
      }
    />
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
  text: {
    width: "60%",
    marginStart: 5,
    paddingRight: 5,
    fontWeight: "700",
    fontSize: 17,
    justifyContent: "center",
    alignSelf: "center",
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
