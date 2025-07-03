import { StyleSheet, Text, View } from "react-native";
import React from "react";

const LabelCost = ({text}:{text:string}) => {
  return <Text style={styles.text}>{text}</Text>;
};

export default LabelCost;

const styles = StyleSheet.create({
    text:{
        fontSize: 22,
        fontWeight: 'bold',
        color: 'gray',
    }
});
