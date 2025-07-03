import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
type props={
  pic:string
}
const Pic = ({pic}:props) => {
  return (
    <View style={styles.container}>
      <Image style={styles.img} source={{uri:(`http://192.168.1.13:3000/${pic}`)}}/>
      </View>
  )
}

export default Pic
const styles=StyleSheet.create({
    container:{
        width:'100%',
        height:200
    },
    img:{
        width:'100%',
        height:'100%',
        borderRadius:8
        
    }
}
)