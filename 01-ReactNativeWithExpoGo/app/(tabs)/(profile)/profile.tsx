import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Profile() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>ProfilePage</Text>
      <Link href="/setting">go to profile setting</Link>
    </View>
  );
}
