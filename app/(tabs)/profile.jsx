import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
import Animated from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";

const profile = () => {
  const DEFAULT_IMAGE = require("../../assets/images/user.png");

  const [name, setName] = useState("user");
  const [showGender, setShowGender] = useState(false);
  const [gender, setGender] = useState("boy");
  const [userProfilePic, setUserProfilePic] = useState(DEFAULT_IMAGE);
  const [showSave, setShowSave] = useState(false);

  const handleGender = () => {
    setShowGender(!showGender);
    setShowSave(true);
  };
  const updateProfileImage = async (
    currentName = name,
    currentGender = gender
  ) => {
    try {
      let imageSource;
      let imageURI = null;

      if (currentName === "user" || !currentName) {
        imageSource = DEFAULT_IMAGE;
      } else {
        imageURI = `https://avatar.iran.liara.run/public/${currentGender}`;
        imageSource = { uri: imageURI };
        await AsyncStorage.setItem("userProfilePic", imageURI);
        triggerProfileUpdate();
      }

      setUserProfilePic(imageSource);
    } catch (error) {
      console.log("Error updating profile image:", error);
    }
  };

  const triggerProfileUpdate = async () => {
    try {
      await AsyncStorage.setItem("profileLastUpdated", new Date().toString());
    } catch (error) {
      console.log("Error triggering profile update:", error);
    }
  };

  const handleSave = () => {
    const finalName = name === "" ? "user" : name;
    setShowSave(false);
    setName(finalName);
    setShowGender(false);
    setUserData(finalName, gender);
    Alert.alert("Success", "Profile updated successfully!");
  };

  const setUserData = async (userName, userGender) => {
    try {
      await AsyncStorage.setItem("userName", userName);
      await AsyncStorage.setItem("userGender", userGender);
      await updateProfileImage(userName, userGender);
    } catch (e) {
      console.log("Error saving user data:", e);
    }
  };

  const loadUserData = async () => {
    try {
      const userName = await AsyncStorage.getItem("userName");
      const userGender = await AsyncStorage.getItem("userGender");
      const profilePicURI = await AsyncStorage.getItem("userProfilePic");
      if (userName) setName(userName);
      if (userGender) setGender(userGender);
      if (profilePicURI) {
        setUserProfilePic({ uri: profilePicURI });
      } else {
        updateProfileImage(userName || name, userGender || gender);
      }
    } catch (e) {
      console.log("Error loading user data:", e);
    }
  };

  useEffect(() => {
    loadUserData();
  }, []);

  useEffect(() => {
    if (name !== "user" && name !== "") {
      updateProfileImage(name, gender);
    }
  }, [name, gender]);

  return (
    <ScrollView style={{ backgroundColor: "#fff" }}>
      <View style={{ flex: 1, backgroundColor: "#fff" }}>
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
                source={userProfilePic}
                style={{
                  width: 80,
                  height: 100,
                  resizeMode: "contain",
                  marginTop: 20,
                }}
              />
              <Text style={styles.userName}>{name === "" ? "user" : name}</Text>
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
                  borderRadius: 10,
                  backgroundColor: "#f2f2f2",
                  fontSize: 15,
                  fontFamily: "interRegular",
                }}
                onChangeText={(text) => {
                  setName(text);
                  setShowSave(true);
                }}
                value={name === "user" ? "" : name}
                spellCheck={false}
              />
            </View>
            <View
              style={{ marginTop: 20, marginLeft: 30, position: "relative" }}
            >
              <Text style={styles.Title}>Gender</Text>
              <TouchableOpacity onPress={handleGender}>
                <Text
                  style={{
                    paddingHorizontal: 25,
                    paddingVertical: 10,
                    width: "90%",
                    height: 50,
                    borderRadius: 10,
                    backgroundColor: "#f2f2f2",
                    fontSize: 15,
                    fontFamily: "interRegular",
                  }}
                >
                  {gender === "boy" ? "Male" : "Female"}
                </Text>
              </TouchableOpacity>
              <Image
                source={require("../../assets/images/down.png")}
                style={{
                  width: 20,
                  height: 20,
                  position: "absolute",
                  right: 45,
                  top: 40,
                }}
              />
              <View
                style={{
                  display: showGender ? "flex" : "none",
                  width: "90%",
                  backgroundColor: "#fff",
                  borderRadius: 10,
                  marginTop: 2,
                }}
              >
                <TouchableOpacity
                  onPress={() => {
                    setGender("boy");
                    setShowSave(true);
                    setShowGender(false);
                  }}
                >
                  <Text
                    style={{
                      width: "100%",
                      paddingHorizontal: 25,
                      paddingVertical: 10,
                      backgroundColor: "#f2f2f2",
                      fontSize: 15,
                      fontFamily: "interRegular",
                      borderBottomWidth: 1,
                    }}
                  >
                    Male
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => {
                    setGender("girl");
                    setShowSave(true);
                    setShowGender(false);
                  }}
                >
                  <Text
                    style={{
                      width: "100%",
                      paddingHorizontal: 25,
                      paddingVertical: 10,
                      backgroundColor: "#f2f2f2",
                      fontSize: 15,
                      fontFamily: "interRegular",
                    }}
                  >
                    Female
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
            {showSave && name !== "" && (
              <TouchableOpacity
                style={{
                  marginTop: 20,
                  marginLeft: 30,
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#32B903",
                  paddingVertical: 10,
                  width: "30%",
                  borderRadius: 10,
                }}
                onPress={handleSave}
              >
                <Text
                  style={{
                    fontFamily: "interBold",
                    fontSize: 15,
                    color: "#000",
                  }}
                >
                  Save
                </Text>
              </TouchableOpacity>
            )}
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
