import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const OutOfStock = () => {
  return (
       <Text style={style.container}>OutOfStock</Text>
  )
}

export default OutOfStock
const style=StyleSheet.create({
    container:{
        fontSize:22,
        color:"#FA7189",
        fontWeight:"800"
    }
})