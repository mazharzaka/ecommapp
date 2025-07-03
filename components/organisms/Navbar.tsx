import { StyleSheet, View } from "react-native";
import React from "react";
import Logo from "../atoms/Logo";
import Profile from "../atoms/Profile";

const Navbar = () => {
  return (
    <View style={styles.header}>
      <Logo />
      <Profile />
    </View>
  );
};

export default Navbar;
const styles=StyleSheet.create({
    header:{
       
        width:'100%',
        height:56,
        flexDirection:'row',
        justifyContent:'space-between',
    marginTop:50,
    paddingHorizontal:12
    }
})