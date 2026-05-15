import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";

interface Props {
  title: string;
  btnText: string;
}

const Title = ({ title, btnText }: Props) => {
  return (
    <View style={styles.titleContainer}>
      <Text>{title}</Text>
      <Pressable>
        <Text>{btnText}</Text>
      </Pressable>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  titleContainer: {
    marginVertical: 20,
    marginHorizontal: 12,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  title: {
    fontSize: 16,
    fontWeight: "800",
  },
  btnText: {
    color: "gray",
    fontWeight: "200",
  },
});
