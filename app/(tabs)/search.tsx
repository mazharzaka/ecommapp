import { View, Text } from "react-native";
import React from "react";
import Cards from "@/components/organisms/Cards";

const search = () => {
  return (
    <View style={{ flex: 1 }}>
      <Cards search={true}/>
    </View>
  );
};

export default search;
