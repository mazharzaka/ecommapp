import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { useEffect, useRef } from "react";
import Cost from "../molecules/Cost";
import { Animated } from "react-native";
import { useIsFocused } from "@react-navigation/native";

const TotalCost = () => {
  const fadeAnim = useRef(new Animated.Value(0)).current;     // للشفافية
  const translateY = useRef(new Animated.Value(20)).current;  // للبداية من تحت
const isFocused = useIsFocused();
useEffect(() => {
  if (isFocused) {
    fadeAnim.setValue(0);
    translateY.setValue(30);

    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }),
      Animated.timing(translateY, {
        toValue: 0,
        duration: 1000,
        useNativeDriver: true,
      }),
    ]).start();
  }
}, [isFocused]); // ← مهم جدًا

  return (
    <Animated.View style={[styles.container, { opacity: fadeAnim, transform: [{ translateY }] }]}>
      <Cost text="Subtotal" price="100" />
      <Cost text="Shopping" price="150" />
      <Cost text="Total Cost" price="20" />
      <TouchableOpacity style={styles.btn} onPress={() => {}}>
        <Text style={{ color: "#fff", fontSize: 16, fontWeight: "bold" }}>
          Checkout
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default TotalCost;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    paddingHorizontal: 20,
    backgroundColor: "#fff",
    height: 250,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    paddingVertical: 24,
    gap: 24,
  },
  btn: {
    width: "100%",
    backgroundColor: "#F83758",
    padding: 10,
    borderRadius: 20,
    justifyContent: "center",
    color: "#fff",
    alignItems: "center",
  },
});
