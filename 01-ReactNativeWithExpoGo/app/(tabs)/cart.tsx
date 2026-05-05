import { Button, StyleSheet, TextInput } from "react-native";
import { useState } from "react";
import {
  SafeAreaView,
  // useSafeAreaInsets,
} from "react-native-safe-area-context";
import { useMMKVStorage } from "react-native-mmkv-storage";
import { tokenStorage, userStorage } from "@/mmkv/store";

export default function CartScreen() {
  const [name, setName] = useState("");
  const [token, setToken] = useMMKVStorage("token", tokenStorage, "");
  const [user, setUser] = useMMKVStorage("user", userStorage, "");
  return (
    <SafeAreaView>
      <TextInput
        placeholder="Enter your name"
        style={style.input}
        defaultValue={name}
        onChangeText={(val) => setName(val)}
      />
      <Button title="save to mmkv" onPress={() => setUser(name)} />

      <TextInput placeholder="Enter your age" style={style.input} />
      <Button
        title="Save to token storage"
        onPress={() => {
          setToken("123");
        }}
      />
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
