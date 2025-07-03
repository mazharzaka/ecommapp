import { Text, StyleSheet, Pressable, Alert } from "react-native";
import React from "react";
import { router } from "expo-router";
import Toast from "react-native-toast-message";
import { useAddOrderMutation } from "@/features/Api";
// import { useProdectByidMutation } from '@/features/Api';
type BtnProps = {
  text: string;
  icon: React.ReactNode;
  id: string;
};
const Btn = ({ text, id, icon: IconType }: BtnProps) => {
  const [addOrder] = useAddOrderMutation();
  const Click = async () => {
    if (text === "Watch") {
      router.push({ pathname: "/product/[id]", params: { id: id } });
    } else if (text === "Cart") {
      try {
        await addOrder({ id });
        Toast.show({
          type: "success",
          text1: "Product Added",
          position: "top",
        });
      } catch (error) {
        Toast.show({
          type: "error",
          text1: "Error Adding Product",
          position: "top",
        });
      }
    }
  };
  return (
    <Pressable style={style.btn} onPress={Click}>
      {IconType}
      <Text style={style.text}>{text}</Text>
    </Pressable>
  );
};

export default Btn;
const style = StyleSheet.create({
  btn: {
    width: "48%",
    backgroundColor: "#FA7189",
    color: "#fff",
    borderRadius: 4,
    flexDirection: "row",
    gap: 5,
    padding: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 14,
    fontWeight: "700",
    color: "#fff",
  },
});
