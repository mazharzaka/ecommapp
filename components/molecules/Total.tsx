import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import PriceCard from '../atoms/PriceCard'

const Total = ({price}:{price:number}) => {
  return (
    <View style={Styles.container}>
      <Text>TotalOrder:</Text>
      <PriceCard text={price.toString()} />
    </View>
  )
}

export default Total
const Styles=StyleSheet.create({
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center'
    }
})