import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

const Logo = () => {
  return (
    <View style={styles.container}>
    <Image style={styles.img} source={require('@/assets/images/logo.png')}/>
    </View>
  )
}

export default Logo
const styles=StyleSheet.create({
    container:{
        width:111,
        height:31
    },
    img:{
        width:'100%',
        height:'100%'
    }
}
)