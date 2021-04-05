import React from "react";
import { Text, StyleSheet, View } from "react-native";
import ImageDetail from "../components/ImageDetail";

const ImageScreen = () => {
  return (
    <View>
      <Text>ImageScreen</Text>
      <ImageDetail
        title="Forest"
        imageSource={require("../../assets/forest.jpg")}
        score={10}
      />
      <ImageDetail
        title="Beach"
        imageSource={require("../../assets/beach.jpg")}
        score={5}
      />
      <ImageDetail
        title="Mountain"
        imageSource={require("../../assets/mountain.jpg")}
        score={9}
      />
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageScreen;
