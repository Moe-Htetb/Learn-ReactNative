import { View, Text, Button } from "react-native";
import React from "react";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function Detail() {
  const router = useRouter();
  const { id } = useLocalSearchParams();
  return (
    <View>
      <Text>Detail {id}</Text>
      <Button onPress={() => router.navigate("/")} title="go to home" />
    </View>
  );
}
