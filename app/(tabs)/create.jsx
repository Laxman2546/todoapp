import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AntDesign from "@expo/vector-icons/AntDesign";

const create = () => {
  const [isOpen, setIsopen] = useState(false);
  const [taskType, setTaskType] = useState("Today Task");
  const [taskPriority, setTaskPriority] = useState("");
  return (
    <View
      style={{
        flex: 1,
        flexDirection: "column",
        marginTop: 50,
        marginLeft: 20,
        paddingRight: 25,
      }}
    >
      <View>
        <Text
          style={{
            fontFamily: "interMedium",
            fontSize: 20,
            letterSpacing: -0.5,
          }}
        >
          Create Task
        </Text>
      </View>
      <TouchableOpacity onPress={() => setIsopen(!isOpen)}>
        <View
          style={{
            marginTop: 12,
            display: "flex",
            flexDirection: "row",
            backgroundColor: "#fff",
            padding: 15,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontFamily: "interRegular",
              fontSize: 15,
            }}
          >
            {taskType ? taskType : "Select Task Type"}
          </Text>
          <AntDesign name="caretdown" size={20} color="black" />
        </View>
      </TouchableOpacity>

      {isOpen && (
        <View
          style={{
            display: "flex",
            flexDirection: "column",
            gap: 10,
            marginTop: 3,
            padding: 15,
            backgroundColor: "#fff",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              setTaskType("Weekly Task");
              setIsopen(false);
            }}
          >
            <Text
              style={{
                fontFamily: "interRegular",
                fontSize: 15,
                backgroundColor: "#fff",
              }}
            >
              Weekly task
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setTaskType("Today Task");
              setIsopen(false);
            }}
          >
            <Text
              style={{
                fontFamily: "interRegular",
                fontSize: 15,
              }}
            >
              Today task
            </Text>
          </TouchableOpacity>
        </View>
      )}
      {taskType === "Today Task" && (
        <>
          <View style={{ marginTop: 10 }}>
            <View>
              <Text style={{ fontFamily: "interMedium", fontSize: 18 }}>
                Task Title
              </Text>
              <TextInput
                placeholder="Enter your title Max 50 characters"
                style={{
                  padding: 10,
                  paddingHorizontal: 20,
                  height: 50,
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  fontSize: 15,
                  fontFamily: "interRegular",
                  marginTop: 10,
                }}
                maxLength={50}
              ></TextInput>
            </View>
            <View style={{ marginTop: 20 }}>
              <Text style={{ fontFamily: "interMedium", fontSize: 18 }}>
                Task Description
              </Text>
              <TextInput
                placeholder="Enter your Description"
                style={{
                  padding: 10,
                  paddingHorizontal: 20,
                  width: "100%",
                  height: 150,
                  textAlignVertical: "top",
                  borderRadius: 10,
                  backgroundColor: "#fff",
                  fontSize: 15,
                  fontFamily: "interRegular",
                  marginTop: 10,
                }}
                multiline={true}
              ></TextInput>
            </View>
            <View style={{ marginTop: 10 }}>
              <Text style={{ fontFamily: "interMedium", fontSize: 18 }}>
                Task Priority
              </Text>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  gap: 10,
                  marginTop: 10,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setTaskPriority("Low");
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      color: taskPriority === "Low" ? "#1DC054" : "#000",
                      backgroundColor:
                        taskPriority === "Low"
                          ? "rgba(29, 192, 84, 0.1)"
                          : "#fff",
                      borderRadius: 10,
                      fontFamily: "interRegular",
                      fontSize: 15,
                    }}
                  >
                    Low
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setTaskPriority("Medium");
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      color: taskPriority === "Medium" ? "#EC8E00" : "#000",
                      backgroundColor:
                        taskPriority === "Medium"
                          ? "rgba(236, 142, 0, 0.1)"
                          : "#fff",
                      borderRadius: 10,
                      fontFamily: "interRegular",
                      fontSize: 15,
                    }}
                  >
                    Medium
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setTaskPriority("High");
                  }}
                >
                  <Text
                    style={{
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      color: taskPriority === "High" ? "#E96161" : "#000",
                      backgroundColor:
                        taskPriority === "High"
                          ? "rgba(233, 97, 97, 0.1)"
                          : "#fff",
                      borderRadius: 10,
                      fontFamily: "interRegular",
                      fontSize: 15,
                    }}
                  >
                    High
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </>
      )}
    </View>
  );
};

export default create;

const styles = StyleSheet.create({});
