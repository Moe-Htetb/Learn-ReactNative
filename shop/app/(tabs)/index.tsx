import { View, StyleSheet } from "react-native";
import { FlashList } from "@shopify/flash-list";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { Image } from "expo-image";
import Cart from "@/components/shop/Cart";
import Title from "@/components/shop/Title";
import Category from "@/components/shop/Category";
import { categories } from "@/data";

const index = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/images/n.png")}
          style={styles.logo}
        />
        <Cart />
      </View>

      <View>
        <Image
          source={require("../../data/shop/banner6.png")}
          style={styles.heroSectionImage}
        />
      </View>
      <Title title="Shop By Category" btnText="See All" />
      {/* <ScrollView horizontal>
        <View style={{ flexDirection: "row", paddingHorizontal: 8 }}>
          {categories.map(({ id, name, image }) => (
            <Category key={id} name={name} image={image} />
          ))}
        </View>
      </ScrollView> */}
      <FlashList
        data={categories}
        renderItem={({ item }) => <Category {...item} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
      />
    </SafeAreaView>
  );
};

export default index;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    minHeight: "100%",
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
  },
  logo: {
    width: 50,
    height: 20,
  },
  heroSectionImage: {
    width: "100%",
    aspectRatio: 20 / 9,
  },
});
