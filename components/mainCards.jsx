import React from "react";
import { View, Text, StyleSheet } from "react-native";

import { LinearGradient } from "expo-linear-gradient";

export default function StickyNotesGrid() {
  return (
    <View style={styles.container}>
      <View style={styles.firstContainer}>
        <LinearGradient
          colors={["#c8b6ff", "#a994ff", "#8673ff", "#8673ff"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.1, 0.3, 0.9, 1.0]}
          style={styles.note1}
        >
          <Text style={styles.title}>Design Sprint</Text>
          <Text style={styles.time}>10:48 AM</Text>
        </LinearGradient>

        <LinearGradient
          colors={["#ffab91", "#ff8a65", "#ff5722", "#ff5722"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.1, 0.3, 0.9, 1.0]}
          style={styles.note2}
        >
          <Text style={styles.title}>Client Meeting</Text>
          <Text style={styles.time}>02:30 PM</Text>
        </LinearGradient>
      </View>

      <View style={styles.secondContainer}>
        <LinearGradient
          colors={["#bde0fe", "#90caf9", "#64b5f6", "#64b5f6"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.1, 0.3, 0.9, 1.0]}
          style={styles.note3}
        >
          <Text style={styles.title}>Team Meeting</Text>
          <Text style={styles.time}>12:55 PM</Text>
        </LinearGradient>

        <LinearGradient
          colors={["#ffcdd2", "#ef9a9a", "#e57373", "#e57373"]}
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          locations={[0.1, 0.3, 0.9, 1.0]}
          style={styles.note4}
        >
          <Text style={styles.title}>Brainstorming</Text>
          <Text style={styles.time}>03:15 PM</Text>
        </LinearGradient>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 8,
    padding: 20,
    justifyContent: "center",
  },
  firstContainer: {
    flexDirection: "row",
    gap: 10,
  },
  secondContainer: {
    flexDirection: "row",
    gap: 10,
  },
  note1: {
    width: 140,
    height: 130,
    padding: 12,
    borderRadius: 20,
    justifyContent: "space-between",
    shadowColor: "#ff7043",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
    margin: 6,
  },
  note2: {
    width: 140,
    height: 80,
    padding: 12,
    borderRadius: 20,
    justifyContent: "space-between",
    shadowColor: "#ff7043",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
    margin: 6,
  },
  note3: {
    width: 140,
    height: 80,
    padding: 12,
    borderRadius: 20,
    justifyContent: "space-between",
    shadowColor: "#ff7043",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
    margin: 6,
  },
  note4: {
    width: 140,
    height: 130,
    padding: 12,
    borderRadius: 20,
    justifyContent: "space-between",
    shadowColor: "#ff7043",
    shadowOffset: { width: 0, height: 20 },
    shadowOpacity: 0.5,
    shadowRadius: 30,
    elevation: 10,
    top: -50,
    margin: 6,
  },
  title: {
    fontWeight: "bold",
    fontSize: 14,
    color: "#fff",
  },
  time: {
    fontSize: 12,
    color: "#eee",
  },
});
