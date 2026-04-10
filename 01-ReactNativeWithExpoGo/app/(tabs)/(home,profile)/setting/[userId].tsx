import { View, Text, Button } from "react-native";
import React from "react";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

export default function UserId() {
  const { userId } = useLocalSearchParams();
  const router = useRouter();
  return (
    <View>
      <Stack.Screen options={{ title: userId as string }} />
      <Text>userId - {userId}</Text>
      <Button
        title="update title"
        onPress={() => router.setParams({ userId: 125 })}
      />
    </View>
  );
}
