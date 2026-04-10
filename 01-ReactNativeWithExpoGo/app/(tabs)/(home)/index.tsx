import { View, Text } from "react-native";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Product Lists</Text>
      <Link href={{ pathname: "/detail", params: { id: 9 } }}>
        go to product detail
      </Link>
      <Link href="/setting/123">go to profile setting </Link>
    </View>
  );
};

export default HomePage;
