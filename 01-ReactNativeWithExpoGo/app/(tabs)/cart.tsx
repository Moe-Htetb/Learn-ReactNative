import { View, Text } from "react-native";
import React from "react";
import {
  //   SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import { Image } from "expo-image";

export default function CartScreen() {
  const insets = useSafeAreaInsets();
  return (
    //<SafeAreaView></SafeAreaView> can use this instead of View
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text>CartScreen</Text>
      <Image
        source={
          // uri: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
          require("../../assets/images/react-logo.png")
        }
        style={{ width: 200, height: 200 }}
      />
    </View>
  );
}
