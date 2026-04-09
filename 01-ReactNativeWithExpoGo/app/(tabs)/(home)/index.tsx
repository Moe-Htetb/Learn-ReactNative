import { View, Text } from "react-native";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Product Lists</Text>
      <Link href="/detail">go to product detail</Link>
    </View>
  );
};

export default HomePage;
