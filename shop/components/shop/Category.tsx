import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Image } from "expo-image";

interface Props {
  id?: number;
  name: string;
  image: string;
  select: number;
  handleSelect: (id: number) => void;
}
const blurhash =
  "|rF?hV%2WCj[ayj[a|j[az_NaeWBj@ayfRayfQfQM{M|azj[azf6fQfQfQIpWXofj[ayj[j[fQayWCoeoeaya}j[ayfQa{oLj?j[WVj[ayayj[fQoff7azayj[ayj[j[ayofayayayj[fQj[ayayj[ayfjj[j[ayjuayj[";

const Category: React.FC<Props> = ({
  id,
  name,
  image,
  select,
  handleSelect,
}) => {
  return (
    <View>
      <Pressable onPress={() => handleSelect(id!)} style={styles.container}>
        <Image
          source={image}
          style={[styles.image, select === id ? styles.imageRing : null]}
          placeholder={blurhash}
          contentFit="cover"
          transition={1000}
        />
        <Text style={styles.caption}>{name}</Text>
      </Pressable>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    gap: 7,
    marginRight: 30,
  },
  image: {
    width: 56,
    height: 56,
  },
  caption: {
    fontSize: 12,
    fontWeight: "600",
  },
  imageRing: {
    borderColor: "yellow",
    borderWidth: 2,
    borderRadius: 30,
  },
});
