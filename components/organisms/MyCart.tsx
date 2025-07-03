import { View, Text } from 'react-native'
import React from 'react'
import HeadingCard from '../atoms/HeadingCard'
import Delivery from '../molecules/Delivery'
import { StyleSheet } from 'react-native'

const MyCart = () => {
  return (
    <>
     <View style={styles.text}>
        <HeadingCard heading="MY CART" bold={true} />
      </View>
      <Delivery/>
    </>
  )
}

export default MyCart
const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    justifyContent: 'center'
  },
});
