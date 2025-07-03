import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import ImageCart from '../atoms/Image'
import CartContent from '../molecules/CartContent'
import Total from '../molecules/Total'

const CardDelivery = ({product}: {product: any}) => {
  return (
    <View style={styles.container}>
          <View style={styles.card}>
            <ImageCart pic={product?.productId?.imgeURL} />
            <CartContent product={product} />
          </View>
          <Total price={product?.productId?.price * product?.qty} />
    </View>
  )
}

export default CardDelivery
const styles=StyleSheet.create({
    container:{
        width:'100%',
        backgroundColor:'#fff',
        // height:220,
        marginTop:11,
        padding:8,
        borderRadius:8,
    },
    text:{
        fontSize:14,
        color:"#0000",
    },
    card:{
        padding:5,
        flexDirection:'row',
        gap:10,
        borderBottomColor:'#CACACA',
        borderBottomWidth:1
    }
})