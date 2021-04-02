import React from "react";
import { Text, StyleSheet, View, FlatList } from "react-native";

const ListScreen = () => {
  const friends = [
    { name: "friend 1", age: 20 },
    { name: "friend 2", age: 45 },
    { name: "friend 3", age: 32 },
    { name: "friend 4", age: 27 },
    { name: "friend 5", age: 64 },
    { name: "friend 6", age: 12 },
    { name: "friend 7", age: 46 },
    { name: "friend 8", age: 10 },
    { name: "friend 9", age: 70 },
    { name: "friend 10", age: 25 },
  ];
  // console.log(friends);
  return (
    <FlatList
      horizontal={false}
      showsHorizontalScrollIndicator={false}
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => {
        return (
          <Text style={styles.textStyle}>
            {item.name} - Age {item.age}
          </Text>
        );
      }}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 15,
    marginVertical: 30,
  },
});

export default ListScreen;
