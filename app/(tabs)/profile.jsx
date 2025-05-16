import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React, { useState } from "react";
import Animated from "react-native-reanimated";
import { StatusBar } from "expo-status-bar";

const profile = () => {
  const [name, setName] = useState("user");
  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
        <StatusBar backgroundColor="#90a7f5" barStyle="light-content" />
        <View
          style={{
            flex: 1,
            marginTop: 25,
            width: "100%",
            height: "100%",
            backgroundColor: "#90a7f5",
          }}
        >
          <Text style={styles.heading}>Your profile</Text>
          <View
            style={{
              width: "100%",
              height: "100%",
              flex: 1,
              marginTop: 30,
              borderTopLeftRadius: 25,
              borderTopRightRadius: 25,
              backgroundColor: "#fff",
            }}
          >
            <View style={{ display: "flex", alignItems: "center" }}>
              <Image
                source={
                  name !== "user"
                    ? `https://avatar.iran.liara.run/public/boy?username=nani`
                    : require("../../assets/images/user.png")
                }
                style={{
                  width: 80,
                  height: 100,
                  resizeMode: "contain",
                  marginTop: 20,
                }}
              />
              <Text style={styles.userName}>{name == "" ? "user" : name}</Text>
            </View>
            <View style={{ marginTop: 20, marginLeft: 30 }}>
              <Text style={styles.Title}>Name</Text>
              <TextInput
                placeholder="enter your name here"
                style={{
                  paddingHorizontal: 25,
                  paddingVertical: 10,
                  width: "90%",
                  height: 50,
                  borderWidth: 1,
                  borderRadius: 10,
                  backgroundColor: "#f2f2f2",
                  fontSize: 15,
                  fontFamily: "interRegular",
                }}
                onChangeText={(text) => setName(text)}
                value={name == "user" ? "" : name}
              />
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default profile;

const styles = StyleSheet.create({
  heading: {
    fontFamily: "interBold",
    fontSize: 20,
    color: "#000",
    marginTop: 30,
    marginLeft: 30,
  },
  Title: {
    fontFamily: "interMedium",
    fontSize: 15,
    color: "#000",
    marginLeft: 10,
    marginBottom: 5,
  },
  userName: {
    fontFamily: "interSemiBold",
    fontSize: 18,
  },
});
