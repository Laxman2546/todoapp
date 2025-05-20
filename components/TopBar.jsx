import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Ionicons from "@expo/vector-icons/Ionicons";

const topBar = ({ heading, pending }) => {
  return (
    <View style={styles.taskTopBar}>
      <View style={styles.tasksHeadline}>
        <Text style={styles.taskHeading}>{heading}</Text>
        <Text style={styles.taskPending}>{pending} Tasks Pending</Text>
      </View>
      <View style={styles.iconsTopBar}>
        <View>
          <Image
            source={require("../assets/images/filter.png")}
            style={styles.filterImage}
          />
        </View>
        <View style={styles.borderLine}></View>
        <View>
          <Ionicons
            name="add-outline"
            size={24}
            color="black"
            style={{ marginLeft: 20, marginTop: 20 }}
          />
        </View>
      </View>
    </View>
  );
};

export default topBar;

const styles = StyleSheet.create({
  tasksHeadline: {
    marginTop: 20,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  taskTopBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  taskHeading: {
    fontFamily: "interSemiBold",
    fontSize: 18,
  },

  taskPending: {
    fontFamily: "interRegular",
    fontSize: 12,
    color: "#7B7B7B",
  },
  iconsTopBar: {
    display: "flex",
    flexDirection: "row",
  },
  borderLine: {
    borderLeftWidth: 1,
    borderLeftColor: "#E4E4E4",
    height: 40,
    marginTop: 20,
    marginLeft: 20,
  },
  filterImage: {
    width: 20,
    height: 20,
    marginTop: 25,
    marginLeft: 20,
  },
});
