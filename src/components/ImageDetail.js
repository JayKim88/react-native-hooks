import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const ImageDetail = ({ title, imageSource, score }) => {
  return (
    <View>
      {/* <img src={imageTest}></img> */}
      <Image source={imageSource}></Image>
      <Text>{title}</Text>
      <Text>Image score - {score}</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default ImageDetail;
