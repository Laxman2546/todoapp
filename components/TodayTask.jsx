import { StyleSheet, Text, View, Image, FlatList } from "react-native";
import React from "react";
import AntDesign from "@expo/vector-icons/AntDesign";
const TodayTask = () => {
  const task = [
    {
      id: 1,
      title: "Prepare project proposal",
      subTitle: "Client: ABC Corp",
      date: "Tue, 11 Jun 2024",
      time: "10:00 AM",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Team standup meeting",
      subTitle: "Daily sync-up",
      date: "Tue, 11 Jun 2024",
      time: "11:30 AM",
      isCompleted: true,
    },
    {
      id: 3,
      title: "Review UI designs",
      subTitle: "Design team",
      date: "Tue, 11 Jun 2024",
      time: "2:00 PM",
      isCompleted: false,
    },
    {
      id: 4,
      title: "Update project documentation",
      subTitle: "Sprint 5 docs",
      date: "Tue, 11 Jun 2024",
      time: "3:30 PM",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Call with supplier",
      subTitle: "Material delivery",
      date: "Tue, 11 Jun 2024",
      time: "4:00 PM",
      isCompleted: true,
    },
    {
      id: 6,
      title: "Code review session",
      subTitle: "Backend API",
      date: "Tue, 11 Jun 2024",
      time: "5:00 PM",
      isCompleted: false,
    },
    {
      id: 7,
      title: "Prepare presentation slides",
      subTitle: "Quarterly report",
      date: "Tue, 11 Jun 2024",
      time: "6:00 PM",
      isCompleted: false,
    },
    {
      id: 8,
      title: "Client feedback meeting",
      subTitle: "XYZ Ltd.",
      date: "Tue, 11 Jun 2024",
      time: "7:00 PM",
      isCompleted: true,
    },
    {
      id: 9,
      title: "Update website content",
      subTitle: "Marketing team",
      date: "Tue, 11 Jun 2024",
      time: "8:00 PM",
      isCompleted: false,
    },
    {
      id: 10,
      title: "Plan tomorrow's tasks",
      subTitle: "Personal planning",
      date: "Tue, 11 Jun 2024",
      time: "9:00 PM",
      isCompleted: false,
    },
  ];

  return (
    <View style={{ marginTop: 20, flex: 1, marginBottom: 150 }}>
      <FlatList
        data={task}
        keyExtractor={(item) => item.id.toString()}
        scrollEnabled={false}
        renderItem={({ item }) => (
          <View
            style={{
              display: "flex",
              flexDirection: "colomn",
              backgroundColor: "#FFFFFF",
              borderRadius: 15,
              padding: 15,
              position: "relative",
              marginBottom: 20,
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                backgroundColor: "#FFFFFF",
                borderRadius: 15,
                position: "relative",
              }}
            >
              <View
                style={{ display: "flex", flexDirection: "column", gap: 2 }}
              >
                <Text
                  style={{
                    fontFamily: "interSemiBold",
                    fontSize: 18,
                    paddingRight: 45,
                    textDecorationLine: item.isCompleted
                      ? "line-through"
                      : "none",
                  }}
                  numberOfLines={2}
                >
                  {item.title}
                </Text>
                <Text
                  style={{
                    fontFamily: "interRegular",
                    fontSize: 12,
                    paddingRight: 50,
                  }}
                  numberOfLines={2}
                >
                  {item.subTitle}
                </Text>
              </View>
              {item.isCompleted && (
                <AntDesign
                  name="checkcircle"
                  size={30}
                  color="#577CFF"
                  style={{ position: "absolute", right: 0, top: 0 }}
                />
              )}
            </View>
            <View
              style={{
                width: "100%",
                height: 1.5,
                backgroundColor: "#DFDFDF",
                marginTop: 10,
              }}
            ></View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
              }}
            >
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 10,
                }}
              >
                <Image
                  source={require("../assets/images/calendar.png")}
                  style={{ width: 25, height: 25 }}
                />
                <Text style={{ fontFamily: "interRegular", fontSize: 12 }}>
                  {item.date}
                </Text>
              </View>
              <View
                style={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 10,
                }}
              >
                <Text style={{ fontFamily: "interRegular", fontSize: 12 }}>
                  {item.time}
                </Text>
              </View>
            </View>
          </View>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

export default TodayTask;

const styles = StyleSheet.create({});
