import { View, StyleSheet } from 'react-native'
import React from 'react'
import Btn from '../atoms/Btn'
import { AntDesign, MaterialCommunityIcons } from '@expo/vector-icons'

type prop={
  id:string
}
const Btns = ({id}:prop) => {
  return (
    <View style={style.container}>
        <Btn text='Watch' id={id} icon={ <MaterialCommunityIcons name="eye" size={24} color="#fff" />}/>
        <Btn text='Cart' id={id} icon={ <AntDesign name="shoppingcart" size={24} color="#fff" />}/>
    </View>
  )
}

export default Btns
const style=StyleSheet.create({
    container:{
     width:"100%",
     gap:10,
     flex:1,
     flexDirection:'row'
    }
})