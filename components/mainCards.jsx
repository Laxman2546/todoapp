import { StyleSheet, Text, View, Image, FlatList } from "react-native";

const mainCards = () => {
  const randColors = [
    {
      bgColor: "rgba(142, 97, 233, 0.1)",
      textColor: "#8E61E9",
    },
    {
      bgColor: "rgba(0, 184, 212, 0.1)",
      textColor: "#00B8D4",
    },
    {
      bgColor: "rgba(255, 193, 7, 0.1)",
      textColor: "#FFC107",
    },
    {
      bgColor: "rgba(156, 39, 176, 0.1)",
      textColor: "#9C27B0",
    },
    {
      bgColor: "rgba(76, 175, 80, 0.1)",
      textColor: "#4CAF50",
    },
    {
      bgColor: "rgba(255, 87, 34, 0.1)",
      textColor: "#FF5722",
    },
    {
      bgColor: "rgba(33, 150, 243, 0.1)",
      textColor: "#2196F3",
    },
    {
      bgColor: "rgba(255, 235, 59, 0.1)",
      textColor: "#FFEB3B",
    },
    {
      bgColor: "rgba(233, 30, 99, 0.1)",
      textColor: "#E91E63",
    },
  ];

  const getColoindex = (itemId) => {
    const index = itemId % randColors.length;
    return index;
  };

  const taskData = [
    {
      id: 1,
      category: "ui/ux design",
      priority: "High",
      title: "Create a taskmanager website",
      date: "Mon, 19 May 2025",
    },
    {
      id: 2,
      category: "Guitar",
      priority: "Low",
      title: "Practice guitar for 2 hours",
      date: "Mon, 25 june 2025",
    },
    {
      id: 3,
      category: "coding",
      priority: "High",
      title: "practice coding for 5 hours",
      date: "Mon, 12 May 2025",
    },
    {
      id: 4,
      category: "DSA",
      priority: "Medium",
      title: "practice DSA for 2 hours",
      date: "Mon, 25 June 2025",
    },
  ];

  return (
    <View style={styles.cardsMain}>
      <FlatList
        data={taskData}
        keyExtractor={(item) => item.id.toString()}
        horizontal
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => {
          const itemColor = getColoindex(item.id);
          const cardColor = randColors[itemColor];
          return (
            <View style={styles.cards}>
              <View style={styles.cardsTop}>
                <Text
                  style={{
                    fontFamily: "interSemiBold",
                    fontSize: 12,
                    backgroundColor: cardColor.bgColor,
                    color: cardColor.textColor,
                    padding: 8,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 15,
                  }}
                >
                  {item.category}
                </Text>
                <Text
                  style={{
                    fontFamily: "interMedium",
                    fontSize: 12,
                    backgroundColor:
                      item.priority === "High"
                        ? "rgba(233, 97, 97, 0.1)"
                        : item.priority === "Medium"
                        ? "rgba(236, 142, 0, 0.1)"
                        : "rgba(29, 192, 84, 0.1)",
                    color:
                      item.priority === "High"
                        ? "#E96161"
                        : item.priority === "Medium"
                        ? "#EC8E00"
                        : "#1DC054",
                    padding: 8,
                    paddingLeft: 15,
                    paddingRight: 15,
                    borderRadius: 15,
                  }}
                >
                  {item.priority}
                </Text>
              </View>
              <View>
                <Text style={styles.mainTitle} numberOfLines={2}>
                  {item.title}
                </Text>
              </View>
              <View style={styles.cardBottom}>
                <Image
                  source={require("../assets/images/calendar.png")}
                  style={styles.calenderImage}
                />
                <Text style={styles.date}>{item.date}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

export default mainCards;

const styles = StyleSheet.create({
  cardsMain: {
    flex: 1,
    marginTop: 20,
  },
  cards: {
    width: 220,
    height: 190,
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 2,
    marginRight: 20,
  },
  cardsTop: {
    display: "flex",
    flexDirection: "row",
    gap: 20,
  },

  mainTitle: {
    fontFamily: "interSemiBold",
    fontSize: 18,
    marginTop: 10,
    wordWrap: "break-word",
  },
  cardBottom: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginTop: 20,
  },
  calenderImage: {
    width: 30,
    height: 25,
  },
  date: {
    fontFamily: "interRegular",
    fontSize: 12,
    color: "#7b7b7b",
  },
});
