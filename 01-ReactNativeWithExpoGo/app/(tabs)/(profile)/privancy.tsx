import { View, Text, Button } from "react-native";
import React from "react";
import { Stack } from "expo-router";

export default function Privancy() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Privancy",
          headerRight: () => <Button title="login"></Button>,
        }}
      />
      <Text>privancy</Text>
    </View>
  );
}
