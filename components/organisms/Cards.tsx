import { FlatList, StyleSheet, View } from "react-native";
import React, { useEffect } from "react";
import CardContent from "../molecules/CardContent";
import { useGetDataQuery, useSearchMutation } from "@/features/Api";
import MainCarousel from "../molecules/Carsoul";
import SearchContent from "../Templates/SearchContent";

type DataType = {
  search?:boolean
}
const Cards = ({search=false}:DataType) => {
  const { data, isLoading, error } = useGetDataQuery();
  const [searchMutation, { data: searchResults }] = useSearchMutation();
useEffect(() => {
try {
     console.log("Search results:", searchResults);
     
  
} catch (error) {
  console.error("Error handling search results:", error);
}
}, [searchResults]);
  // Choose the correct data source
  const listData = search ? searchResults || data : data || [];

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        keyExtractor={(item, index) => item?.id?.toString() || index.toString()}
        ListHeaderComponent={search ? <SearchContent onSearch={(query: string) => searchMutation({ search: query })} /> : <MainCarousel />}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <CardContent product={item} key={item.id} />
          </View>
        )}
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
      />
    </View>
  );
};

export default Cards;

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  contentContainer: {
    paddingTop: 20,
    paddingBottom: 20,
    gap: 10,
  },
  itemContainer: {
    flex: 1,
    margin: 10,
  },
});
