import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";
import ListScreen from "./ListScreen";

const HomeScreen = ({ navigation }) => {
  // console.log(props);
  return (
    <View>
      <Text style={styles.text}>HomeScreen</Text>
      <Button
        onPress={() => navigation.navigate("Components")}
        title="Go to Components"
      />
      <Button onPress={() => navigation.navigate("List")} title="Go to List" />
      {/* <TouchableOpacity onPress={() => navigation.navigate("List")}>
        <Text>Go to List</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
});

export default HomeScreen;
