import React, { useState } from "react";
import { Text, StyleSheet, View, Button } from "react-native";

const CounterScreen = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Button
        onPress={() => {
          setCount(count + 1);
        }}
        title="Plus"
      />
      <Button
        onPress={() => {
          setCount(count - 1);
        }}
        title="Minus"
      />
      <Text>result: {count}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default CounterScreen;
