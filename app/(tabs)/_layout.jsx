import {
  Image,
  StyleSheet,
  Text,
  View,
  Pressable,
  Keyboard,
  Animated,
  Platform,
  AppState,
} from "react-native";
import React, { useEffect, useState, useRef, useCallback } from "react";
import { Tabs } from "expo-router";
import home from "../../assets/images/home.png";
import tasks from "../../assets/images/task.png";
import profile from "../../assets/images/user.png";
import add from "../../assets/images/add.png";
import calender from "../../assets/images/calendar.png";
import { useFonts } from "expo-font";
import interRegular from "../../assets/fonts/Inter_18pt-Regular.ttf";
import interMedium from "../../assets/fonts/Inter_18pt-Medium.ttf";
import interSemiBold from "../../assets/fonts/Inter_18pt-SemiBold.ttf";
import interBold from "../../assets/fonts/Inter_18pt-Bold.ttf";
import interBlack from "../../assets/fonts/Inter_18pt-Black.ttf";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
const _layout = () => {
  const tabBarPosition = useRef(new Animated.Value(0)).current;
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const [profilePic, setProfilePic] = useState(profile);
  const [profilePicKey, setProfilePicKey] = useState(0);
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const showSubscription = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillShow" : "keyboardDidShow",
      handleKeyboardShow
    );
    const hideSubscription = Keyboard.addListener(
      Platform.OS === "ios" ? "keyboardWillHide" : "keyboardDidHide",
      handleKeyboardHide
    );

    // Add AppState listener to detect when app comes to foreground
    const appStateSubscription = AppState.addEventListener(
      "change",
      (nextAppState) => {
        if (
          appState.current.match(/inactive|background/) &&
          nextAppState === "active"
        ) {
          getProfilePic();
        }
        appState.current = nextAppState;
      }
    );

    const checkProfileInterval = setInterval(async () => {
      try {
        const lastChecked = await AsyncStorage.getItem(
          "lastProfileCheckTimestamp"
        );
        const lastUpdated = await AsyncStorage.getItem("profileLastUpdated");

        if (!lastChecked || (lastUpdated && lastChecked < lastUpdated)) {
          getProfilePic();
          await AsyncStorage.setItem(
            "lastProfileCheckTimestamp",
            new Date().toString()
          );
        }
      } catch (error) {
        console.error("Error checking profile updates:", error);
      }
    }, 1000); // Check every second

    return () => {
      hideSubscription.remove();
      showSubscription.remove();
      appStateSubscription.remove();
      clearInterval(checkProfileInterval);
    };
  }, []);

  const handleKeyboardHide = () => {
    setKeyboardVisible(false);
    Animated.timing(tabBarPosition, {
      toValue: 0,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const handleKeyboardShow = (event) => {
    setKeyboardVisible(true);
    Animated.timing(tabBarPosition, {
      toValue: 150,
      duration: 250,
      useNativeDriver: true,
    }).start();
  };

  const TabIcon = ({ icon, color, focused, type }) => {
    return (
      <View
        style={{
          flex: 1,
          marginRight: -30,
          marginTop: 15,
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            tintColor: focused && type != "profile" ? "#577CFF" : color,
            width: 25,
            height: 25,
            borderWidth: type === "profile" && focused ? 2 : 0,
            borderRadius: type === "profile" && focused ? 50 : 0,
          }}
        />
      </View>
    );
  };

  const getProfilePic = async () => {
    try {
      const userProfilePic = await AsyncStorage.getItem("userProfilePic");
      if (userProfilePic) {
        setProfilePic({ uri: userProfilePic });
        setProfilePicKey((prevKey) => prevKey + 1);
      } else {
        setProfilePic(profile);
      }
    } catch (error) {
      console.error("Error fetching profile pic:", error);
      setProfilePic(profile);
    }
  };

  useFocusEffect(
    useCallback(() => {
      getProfilePic();
      const intervalId = setInterval(() => {
        getProfilePic();
      }, 2000);

      return () => clearInterval(intervalId);
    }, [])
  );

  const [fontsLoaded] = useFonts({
    interBlack: interBlack,
    interRegular: interRegular,
    interMedium: interMedium,
    interSemiBold: interSemiBold,
    interBold: interBold,
  });

  if (!fontsLoaded) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#fff",
        }}
      >
        <Text>Loading...</Text>
      </View>
    );
  }
  return (
    <>
      <StatusBar backgroundColor="#90a7f5" barStyle="light-content" />
      <Tabs
        initialRouteName="create"
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarActiveTintColor: "#577CFF",
          tabBarInactiveTintColor: "#000",
          tabBarShowLabel: false,
          tabBarStyle: {
            backgroundColor: "#fff",
            borderTopWidth: 1,
            width: "90%",
            height: 60,
            borderColor: "transparent",
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowOffset: { width: 0, height: -2 },
            shadowRadius: 5,
            elevation: 5,
            position: "absolute",
            margin: 15,
            borderRadius: 25,
            bottom: 15,
            zIndex: 100,
            transform: [{ translateY: tabBarPosition }],
          },
          tabBarButton: (props) => {
            return (
              <Pressable
                {...props}
                android_ripple={{ color: "transparent" }}
                android_disableSound={false}
                style={(state) => [
                  props.style,
                  {
                    backgroundColor: state.pressed
                      ? "transparent"
                      : "transparent",
                  },
                ]}
              />
            );
          },
        })}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarLabel: "home",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={home} color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="calender"
          options={{
            tabBarLabel: "calender",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={calender} color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            tabBarLabel: "createtask",
            tabBarIcon: () => (
              <View
                style={{
                  position: "absolute",
                  top: -30,
                  right: -35,
                  width: 70,
                  height: 70,
                  borderRadius: 35,
                  backgroundColor: "#577CFF",
                  alignItems: "center",
                  justifyContent: "center",
                  shadowColor: "#000",
                  shadowOpacity: 0.2,
                  shadowOffset: { width: 0, height: 4 },
                  shadowRadius: 5,
                  elevation: 8,
                }}
              >
                <Image
                  source={add}
                  resizeMode="contain"
                  style={{ width: 35, height: 35 }}
                />
              </View>
            ),
          }}
        />
        <Tabs.Screen
          name="manage"
          options={{
            tabBarLabel: "alltasks",
            tabBarIcon: ({ color, focused }) => (
              <TabIcon icon={tasks} color={color} focused={focused} />
            ),
          }}
        />
        <Tabs.Screen
          key={profilePicKey}
          name="profile"
          options={{
            tabBarLabel: "profile",
            tabBarIcon: ({ type, focused }) => (
              <TabIcon icon={profilePic} type={"profile"} focused={focused} />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default _layout;

const styles = StyleSheet.create({});
