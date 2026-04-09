import { View, Text } from "react-native";
import { Link } from "expo-router";

const HomePage = () => {
  return (
    <View>
      <Text>HomePage</Text>
      <Link href="/about">go to about page</Link>
    </View>
  );
};

export default HomePage;
