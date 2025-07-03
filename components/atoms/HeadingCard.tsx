import { StyleSheet, Text } from 'react-native'
import React from 'react'
type props={
  heading:string,
  bold?:boolean
}
const HeadingCard = ({heading,bold=false}:props) => {
  return (
      <Text style={bold?style.bold:style.heading}>{heading}</Text>
   
  )
}

export default HeadingCard
const style=StyleSheet.create({
  heading:{
    fontSize:20,
    fontWeight:'600',
  },
  bold:{
    fontSize:30,
    fontWeight:'800',
    lineHeight:22
  }
})
