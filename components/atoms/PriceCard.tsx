import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
type Props={
  text:string,
big?:boolean
}
const PriceCard = ({text,big=false}:Props) => {
  return (
      <Text style={big?style.big: style.text}>
        ${text}
      </Text>
  )
}

export default PriceCard
const style = StyleSheet.create({
  text: {
    fontSize: 12,
    fontWeight: "bold",
  },
   big: {
    fontSize: 22,
    fontWeight: "bold",
  },
});
