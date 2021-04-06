import React, { useState } from "react";
import { Button, StyleSheet, View } from "react-native";

const ColorScreen = () => {
  const [color, setColor] = useState("rgb(0, 0, 0)");
  return (
    <View>
      <Button
        onPress={() => {
          const newColor = randomColor();
          setColor(newColor);
        }}
        title="Add a color"
      />
      <View style={{ width: 100, height: 100, backgroundColor: color }} />
    </View>
  );
};

const randomColor = () => {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
