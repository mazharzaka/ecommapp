import { View, Text, StyleSheet } from "react-native";
import React from "react";
import HeadingCard from "../atoms/HeadingCard";
import { AntDesign } from "@expo/vector-icons";

const Delivery = () => {
  return (
    <View style={styles.container}>
      <AntDesign name="shoppingcart" size={24} color="black" />
      <HeadingCard heading="Shopping List" />
    </View>
  );
};

export default Delivery;
const styles = StyleSheet.create({
  container: {
    gap: 5,
    flexDirection: "row",
    marginTop: 30,
  },
});
