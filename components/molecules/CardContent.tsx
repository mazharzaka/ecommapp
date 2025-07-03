import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import HeadingCard from "../atoms/HeadingCard";
import PriceCard from "../atoms/PriceCard";
import TextCard from "../atoms/TextCard";
import Pic from "../atoms/pic";
import Btns from "./Btns";
import { StarRatingDisplay } from "react-native-star-rating-widget";

type Props = {
product: any;
};
const CardContent = ({product}:Props) => {
  return (
    <View style={style.container}>
      <Pic pic={product.imgeURL}/>
      <View style={style.containerText}>
        <HeadingCard heading={product.name} />
        <TextCard text={product.desc }/>
        <PriceCard text={product.price} />
         <StarRatingDisplay
        rating={4}
        color='#EDB310'
        starSize={15}
        
      />
        <Btns id={product._id} />
      </View>
    </View>
  );
};

export default CardContent;
const { width } = Dimensions.get("window");
const style = StyleSheet.create({
  container: {
    width: width * 0.45,
    backgroundColor: "#fff",
    borderRadius: 8,
    boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
  },
  containerText: {
    gap: 4,
    padding: 8,
  },
});
