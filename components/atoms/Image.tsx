import { View, StyleSheet, Image } from 'react-native'
import React from 'react'

const ImageCart = ({pic}:{pic:string}) => {
  return (
    <View style={styles.container}>
     <Image style={styles.pic} source={{uri:(`http://192.168.1.13:3000/${pic}`)}}/>
    </View>
  )
}

export default ImageCart
const styles=StyleSheet.create({
    container:{
        width:'50%',
        height:135,
        borderRadius:10
    },
    pic:{
        width:'100%',
        height:'100%',
        borderRadius:10

    }
})