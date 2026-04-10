import { View, Text } from "react-native";
import React from "react";
import { useLocalSearchParams } from "expo-router";

export default function UserId() {
  const { userId } = useLocalSearchParams();
  return (
    <View>
      <Text>userId - {userId}</Text>
    </View>
  );
}
