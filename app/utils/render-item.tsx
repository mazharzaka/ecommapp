import React from "react";
import { View, Image, StyleSheet } from "react-native";

export  function renderItem({ rounded }: { rounded?: boolean }) {
  return ({ item }: { item: any }) => (
    <View style={styles.container}>
      <Image
        source={item}
        style={[styles.image, rounded && styles.rounded]}
        resizeMode="cover"
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
    
  },
  image: {
    width: '100%',
    height: '100%',
  },
  rounded: {
    overflow: 'hidden',
    borderRadius:5
  },
});
