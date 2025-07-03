import { View, Text, StyleSheet, FlatList } from "react-native";
import React, { useEffect } from "react";

import CardDelivery from "../organisms/CardDelivery";
import MyCart from "../organisms/MyCart";
import { useGetCartQuery } from "@/features/Api";
import TotalCost from "../organisms/TotalCost";

const Cart = () => {
  // Define the expected type for the cart data
  type CartData = {
    cartItem: any[];
    // add other properties if needed
  };

  const { data } = useGetCartQuery() as { data?: CartData[] };
  useEffect(() => {
    try {
      if (data && data[0]) {
        console.log("Cart data fetched:", data[0]);
      }
    } catch (error) {
      console.error("Error fetching cart data:", error);
    }
  }, [data]);
  return (
    <View style={styles.container}>
      <FlatList
      style={{ flex: 1 ,margin:16}}
        data={data && data[0] ? data[0].cartItem : []}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        ListHeaderComponent={<MyCart />}
        renderItem={({ item }) => (
          <CardDelivery product={item} /> 
        )}
      />
      <TotalCost />
    </View>
  );
};

export default Cart;
const styles = StyleSheet.create({
  container: {
    // padding: 16,
    // marginTop: 30,
    flex: 1,
  },

});
