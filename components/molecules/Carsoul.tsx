import { renderItem } from "@/app/utils/render-item";
import * as React from "react";
import { Dimensions, StyleSheet } from "react-native";
import { View } from "react-native";
import { useSharedValue } from "react-native-reanimated";
import Carousel from "react-native-reanimated-carousel";

const defaultDataWith6Colors = [
  require('../../assets/images/1.png'),
  require('../../assets/images/2.png'),
  require('../../assets/images/3.png'),
];

function MainCarousel() {
  const scrollOffsetValue = useSharedValue<number>(0);
  const { width } = Dimensions.get("window");
  return (
    <View style={styles.contaier} id="carousel-component">
      <Carousel
        testID={"test"}
        loop={true}
        width={width}
        height={258}
        snapEnabled={true}
        pagingEnabled={true}
        autoPlayInterval={2000}
        data={defaultDataWith6Colors}
        defaultScrollOffsetValue={scrollOffsetValue}
        style={{ width: "100%" }}
        autoPlay={true}
        onConfigurePanGesture={(g: { enabled: (arg0: boolean) => any }) => {
          "worklet";
          g.enabled(false);
        }}
        renderItem={renderItem({ rounded: true })}
      />
    </View>
  );
}

export default MainCarousel;
const styles=StyleSheet.create({
    contaier:{
        padding:8,

    }
})