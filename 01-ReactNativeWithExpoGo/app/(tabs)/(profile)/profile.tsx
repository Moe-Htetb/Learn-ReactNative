import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfilePage</Text>
      <Link href="/profileDetail">go to profile setting</Link>
      <Link href="/setting/2">go to profile Id</Link>
    </View>
  );
}
