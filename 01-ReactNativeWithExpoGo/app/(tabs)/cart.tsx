import { View, Text } from "react-native";
import React from "react";
import {
  //   SafeAreaView,
  useSafeAreaInsets,
} from "react-native-safe-area-context";

export default function CartScreen() {
  const insets = useSafeAreaInsets();
  return (
    //<SafeAreaView></SafeAreaView> can use this instead of View
    <View style={{ flex: 1, paddingTop: insets.top }}>
      <Text>CartScreen</Text>
    </View>
  );
}
