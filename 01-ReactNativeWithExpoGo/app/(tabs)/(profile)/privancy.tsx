import { View, Text, Button } from "react-native";
import React from "react";
import { Stack } from "expo-router";
import CustomText from "@/components/shop/CustomText";

export default function Privancy() {
  return (
    <View>
      <Stack.Screen
        options={{
          title: "Privancy",
          headerRight: () => <Button title="login"></Button>,
        }}
      />
      <Text style={{ fontSize: 20, fontFamily: "JetBrainsMono" }}>
        Welcome to privancy screen
      </Text>
      <CustomText style={{ fontSize: 20 }}>San Kyi Tr Par</CustomText>
    </View>
  );
}
