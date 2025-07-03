import { Image, StyleSheet, View } from 'react-native'
import React from 'react'

const Profile = () => {
  return (
   <View style={styles.container}>
       <Image style={styles.img} source={require('@/assets/images/profile.png')}/>
       </View>
  )
}

export default Profile
const styles=StyleSheet.create({
    container:{
        width:40,
        height:40
    },
    img:{
        width:'100%',
        height:'100%'
    }
}
)