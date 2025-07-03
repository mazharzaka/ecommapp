import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LabelCost from '../atoms/LabelCost'
import PriceCard from '../atoms/PriceCard'
type CostProps = {
  text: string;
    price: string;
    big?: boolean;
}
const Cost = ({text,price,big}:CostProps) => {
  return (
    <View style={styles.container}>
     <LabelCost text={text} />
     <PriceCard text={price} big={true} />
    </View>
  )
}

export default Cost

const styles = StyleSheet.create({
    container:{
        width:'100%',
        justifyContent:'space-between',
        flexDirection:'row',
    }
})