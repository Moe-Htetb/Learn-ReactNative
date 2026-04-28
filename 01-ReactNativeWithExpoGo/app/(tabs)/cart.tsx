import { Button, Text, TextInput } from "react-native";
import { useState } from "react";
import {
  SafeAreaView,
  // useSafeAreaInsets,
} from "react-native-safe-area-context";

import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CartScreen() {
  const [name, setName] = useState("");
  const saveToSecureStorage = async () => {
    try {
      if (name) {
        await AsyncStorage.setItem("name", name);
        alert("Name saved to secure storage");
      } else {
        alert("Please enter a name");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <Text>{name}</Text>
      <TextInput
        placeholder="Enter your name"
        value={name}
        onChangeText={(val) => setName(val)}
        style={{ borderWidth: 1, height: 40, margin: 10, padding: 10 }}
      />
      <Button title="Save to Secure storage" onPress={saveToSecureStorage} />
    </SafeAreaView>
  );
}
