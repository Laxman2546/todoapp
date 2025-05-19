import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useEffect, useState } from "react";
const profile = require("../../assets/images/user.png");
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { router } from "expo-router";
const index = () => {
  const DEFAULT_IMAGE = require("../../assets/images/user.png");
  const [greetings, setgreetings] = useState("");
  const [userName, setUserName] = useState("user");
  const [profilePic, setProfilePic] = useState(DEFAULT_IMAGE);
  useEffect(() => {
    const cuurentTime = new Date();
    const hour = cuurentTime.getHours();
    if (hour < 12) {
      setgreetings("Good Morning 🌻");
    } else if (hour > 18) {
      setgreetings("Good Evening🌙");
    } else {
      setgreetings("Good Afternoon ☀️");
    }
  }, []);
  const getDetails = async () => {
    const userName = await AsyncStorage.getItem("userName");
    if (userName) {
      setUserName(userName);
    } else {
      setUserName("user");
    }
  };
  const getProfilePic = async () => {
    try {
      const userProfilePic = await AsyncStorage.getItem("userProfilePic");
      if (userProfilePic) {
        setProfilePic({ uri: userProfilePic });
      } else {
        setProfilePic(profile);
      }
    } catch (error) {
      console.error("Error fetching profile pic:", error);
      setProfilePic(profile);
    }
  };
  useEffect(() => {
    getDetails();
    getProfilePic();
  }, [getDetails, getProfilePic]);
  return (
    <ScrollView>
      <View style={styles.headStyle}>
        <View style={styles.headline}>
          <View style={styles.topBar}>
            <TouchableOpacity onPress={() => router.replace("/profile")}>
              <View>
                <Image source={profilePic} style={styles.userImage} />
              </View>
            </TouchableOpacity>
            <View>
              <Text style={styles.greetingStyle}>{greetings}</Text>
              <Text style={styles.userName}>{userName}</Text>
            </View>
          </View>
          <View>
            <Ionicons name="notifications-outline" size={24} color="black" />
          </View>
        </View>
      </View>
      <View style={styles.taskTopBar}>
        <View style={styles.tasksHeadline}>
          <Text style={styles.taskHeading}>Today's Tasks</Text>
          <Text style={styles.taskPending}>5 Tasks Pending</Text>
        </View>
        <View style={styles.iconsTopBar}>
          <View>
            <Image
              source={require("../../assets/images/filter.png")}
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
    </ScrollView>
  );
};

export default index;

const styles = StyleSheet.create({
  headStyle: {
    paddingRight: 25,
    marginTop: 50,
    marginLeft: 20,
  },
  greetingStyle: {
    fontFamily: "interRegular",
    fontSize: 12,
    letterSpacing: -0.5,
  },
  userName: {
    fontFamily: "interBold",
    fontSize: 20,
    letterSpacing: -0.5,
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "7B7B7B",
  },
  topBar: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 20,
  },
  headline: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 20,
  },
  tasksHeadline: {
    marginTop: 20,
    marginLeft: 20,
    display: "flex",
    flexDirection: "column",
    gap: 5,
  },
  taskTopBar: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginRight: 20,
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
