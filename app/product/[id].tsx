import { View, Text, StyleSheet, ScrollView } from "react-native";
import React, { useEffect, useState } from "react";
import BigPic from "@/components/atoms/BigPic";
import HeadingCard from "@/components/atoms/HeadingCard";
import TextCard from "@/components/atoms/TextCard";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import PriceCard from "@/components/atoms/PriceCard";
import OutOfStock from "@/components/atoms/OutOfStock";
import Btns from "@/components/molecules/Btns";
import { useProdectByidMutation } from "@/features/Api";
import { Stack, useLocalSearchParams } from "expo-router";

const ProdectDatails = () => {
  const [prodect] = useProdectByidMutation();
  const { id } = useLocalSearchParams();
  const [data, setData] = useState<any>(null);
  useEffect(() => {
    const fetch = async () => {
      const stringId = Array.isArray(id) ? id[0] : id;
      const item = await prodect({ id: stringId });
      setData(item.data);
    };
    fetch();
  }, []);
  return (
    <>
      <Stack.Screen
        options={{
          title:  "prodeuct datelis", 
        }}
      />

      <ScrollView>
        <View style={style.container}>
          <BigPic pic={data?.imgeURL} />
          <View style={style.content}>
            <HeadingCard heading={data?.name} bold={true} />
            <TextCard text={data?.desc} big={true} />
            <StarRatingDisplay rating={4} color="#EDB310" starSize={22} />
            <View style={style.stock}>
              <PriceCard text={data?.price} big={true} />
              {data?.Isstock && <OutOfStock />}
            </View>
            <HeadingCard heading={data?.category} />
            <HeadingCard heading="Product Details" bold={true} />
            <TextCard
              text='Perhaps the most iconic sneaker of all-time, this original "Chicago"? colorway is the cornerstone to any sneaker collection. Made famous in 1985 by Michael Jordan, the shoe has stood the test of time, becoming the most famous colorway of  the Air Jordan 1. This 2015 release saw the'
              big={true}
            />
            <Btns id={data?.id} />
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default ProdectDatails;
const style = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    padding: 16,
    gap: 16,
  },
  content: {
    gap: 8,
  },
  stock: {
    flexDirection: "row",
    gap: 10,
  },
});
