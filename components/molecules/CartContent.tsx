import { View, Text, StyleSheet, TextInput } from "react-native";
import React, { useEffect, useState } from "react";
import HeadingCard from "../atoms/HeadingCard";
import TextCard from "../atoms/TextCard";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import PriceCard from "../atoms/PriceCard";
import Toast from "react-native-toast-message";
import { useDelOrderMutation, useQtyMutation } from "@/features/Api";

const CartContent = ({ product }: { product: any }) => {
  const [num, setNum] = useState("");
  const [delOrder] = useDelOrderMutation();
  const [qty] = useQtyMutation();
  useEffect(() => {
    if (product?.qty != null) {
      setNum(product.qty.toString());
    }
  }, [product]);
  const remove = async () => {
    try {
      const del = await delOrder({ id: product?.productId?._id });
      console.log("Product removed:", del);

      Toast.show({
        type: "success",
        text1: "Product Removed",
        position: "top",
      });
    } catch (error) {
      console.log("Error removing product:", error);

      Toast.show({
        type: "error",
        text1: "Error Removing Product",
        position: "top",
      });
    }
  };

  const handleTextChange = async (newText: string) => {
    try {
      setNum(newText);
      const res = await qty({
        id: product?.productId?._id,
        qty: Number(newText),
      });
      console.log("Quantity updated:", res);
      Toast.show({
        type: "success",
        text1: "Quantity Updated",
        position: "top",
      });
    } catch (error) {
      console.log("Error updating quantity:", error);
      Toast.show({
        type: "error",
        text1: "Error Updating Quantity",
        position: "top",
      });
    }
  };
  return (
    <View style={styles.container}>
      <HeadingCard heading={product?.productId?.name} />
      <TextCard text={product?.productId?.desc} />
      <StarRatingDisplay rating={4.5} color="#EDB310" starSize={15} />
      <PriceCard text={product?.productId?.price} big={true} />
      <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            width: "100%",
            color: "#F83758",
          }}
          onPress={remove}
        >
          Remove
        </Text>
      </View>
      <TextInput
        style={styles.input}
        value={num !== "" ? num : product?.qty?.toString() || ""}
        keyboardType="numeric"
        onChangeText={handleTextChange}
      />
    </View>
  );
};

export default CartContent;
const styles = StyleSheet.create({
  container: {
    gap: 5,
  },
  input: {
    backgroundColor: "#F2F2F2",
    borderRadius: 10,
    justifyContent: "center",
  },
});
