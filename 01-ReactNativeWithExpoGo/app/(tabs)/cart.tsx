import { Button, StyleSheet, Text, TextInput } from "react-native";
import { useState } from "react";
import {
  SafeAreaView,
  // useSafeAreaInsets,
} from "react-native-safe-area-context";

import * as SecureStore from "expo-secure-store";

export default function CartScreen() {
  const [formState, setFormState] = useState<{ name: string; age: number }>({
    name: "",
    age: 0,
  });
  const saveToSecureStorage = async () => {
    try {
      SecureStore.setItemAsync("userInfo", JSON.stringify(formState));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Enter your name"
        value={formState?.name}
        onChangeText={(val) => setFormState({ ...formState, name: val })}
        style={style.input}
      />

      <TextInput
        placeholder="Enter your age"
        value={formState?.age.toString()}
        onChangeText={(val) => setFormState({ ...formState, age: +val })}
        style={style.input}
      />
      <Button title="Save to Secure storage" onPress={saveToSecureStorage} />
    </SafeAreaView>
  );
}
const style = StyleSheet.create({
  input: {
    borderWidth: 1,
    height: 40,
    margin: 10,
    padding: 10,
  },
});
