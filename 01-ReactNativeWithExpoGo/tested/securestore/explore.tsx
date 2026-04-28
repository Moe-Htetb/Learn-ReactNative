import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState } from "react";
import { Button, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function TabTwoScreen() {
  const [name, setName] = useState("");
  const getFromSecureStorage = async () => {
    try {
      const value = await AsyncStorage.getItem("name");
      if (value !== null) {
        setName(value);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <Text> {name}</Text>
      <Button title="get from secure store" onPress={getFromSecureStorage} />
    </SafeAreaView>
  );
}
