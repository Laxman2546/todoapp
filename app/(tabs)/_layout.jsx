import { Image, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";
import { Tabs } from "expo-router";
import home from "../../assets/images/home.png";
import tasks from "../../assets/images/task.png";

const _layout = () => {
  const TabIcon = ({ icon, color, focused }) => {
    return (
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          width: 50,
        }}
      >
        <Image
          source={icon}
          resizeMode="contain"
          style={{
            tintColor: focused ? "#5F54A1" : color,
            width: 25,
            height: 25,
          }}
        />
      </View>
    );
  };

  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarActiveTintColor: "#5F54A1",
        tabBarInactiveTintColor: "#000",
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderTopWidth: 1,
          height: 60,
          paddingBottom: 5,
          borderColor: "transparent",
          shadowColor: "#000",
          shadowOpacity: 0.1,
          shadowOffset: { width: 0, height: -2 },
          shadowRadius: 5,
          elevation: 5,
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
        name="manage"
        options={{
          tabBarLabel: "alltasks",
          tabBarIcon: ({ color, focused }) => (
            <TabIcon icon={tasks} color={color} focused={focused} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;

const styles = StyleSheet.create({});
