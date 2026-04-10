import { Text } from "react-native";
import React from "react";
import type { TextProps } from "react-native";

export default function CustomText({ style, ...rest }: TextProps) {
  return <Text style={[style, { fontFamily: "JetBrainsMono" }]} {...rest} />;
}
