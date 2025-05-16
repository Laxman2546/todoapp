import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
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
import "@/global.css";
const _layout = () => {
  const TabIcon = ({ icon, color, focused }) => {
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
            tintColor: focused ? "#577CFF" : color,
            width: 25,
            height: 25,
          }}
        />
      </View>
    );
  };
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
    <Tabs
      initialRouteName="profile"
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#577CFF",
        tabBarInactiveTintColor: "#000",
        tabBarShowLabel: false,
        tabBarHideOnKeyboard: true,
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
          bottom: 8,
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
        name="profile"
        options={{
          tabBarLabel: "profile",

          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={profile} color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
