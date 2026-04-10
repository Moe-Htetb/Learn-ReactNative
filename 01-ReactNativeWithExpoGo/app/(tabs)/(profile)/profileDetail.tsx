import { View, Text, Button } from "react-native";
import React from "react";
import { Link, useLocalSearchParams, useRouter } from "expo-router";

export default function ProfileDetail() {
  const router = useRouter();
  const { username } = useLocalSearchParams();
  return (
    <View>
      <Text>ProfileDetail - {username}</Text>
      <Link href="/privancy">go to privancy navigate</Link>
      <Link href="/profileDetail" push>
        go to privancy navigate push
      </Link>
      <Link href="/privancy" replace>
        go to privancy navigate replace
      </Link>

      <Button
        title="go to privancy navigate"
        onPress={() => router.navigate("/privancy")}
      />
      <Button
        title="go to privancy push"
        onPress={() =>
          router.push({
            pathname: "/profileDetail",
            params: { username: "moehtet" },
          })
        }
      />
      <Button
        title="go to privancy replace"
        onPress={() => router.replace("/privancy")}
      />
    </View>
  );
}
