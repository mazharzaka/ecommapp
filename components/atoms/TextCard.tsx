import { StyleSheet, Text } from "react-native";
import React from "react";
type props={
  text:string,
  big?:boolean
}
const TextCard = ({text,big=false}:props) => {
  return (
    <Text style={big?style.big:style.text}>
       {text}
    </Text>
  );
};

export default TextCard;
const style = StyleSheet.create({
  text: {
    fontSize: 10,
    fontWeight: "300",
  },
  big:{
    fontSize:16,
    fontWeight:'300'
  }
});
