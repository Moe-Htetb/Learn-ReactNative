import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { IconSymbol } from "../ui/icon-symbol.ios";

const Cart = () => {
  return (
    <Pressable>
      <IconSymbol name="cart" color="black" />
      <View style={styles.badgeContainer}>
        <Text style={styles.badgeText}>2</Text>
      </View>
    </Pressable>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {},
  badgeContainer: {
    position: "absolute",
    top: -10,
    right: -10,
    backgroundColor: "red",
    width: 20,
    height: 20,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  badgeText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 11,
  },
});
