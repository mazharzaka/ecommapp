import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
type SearchContentProps = {  onSearch?: (query: string) => void;
}
const SearchContent = ({onSearch}:SearchContentProps) => {
 const handleSearch = async (text:string) => {
    try {
      if (onSearch) {
        onSearch(text);
      }
    } catch (err) {
      console.error("Search error:", err);
    }
  };
  return (
    <View 
        style={styles.container}
    
    >
     <TextInput
        placeholder='Search any product'
        placeholderTextColor={'#BBBBBB'}
        autoCapitalize='none'
        autoCorrect={false}
        onChangeText={handleSearch}
        style={styles.input}
      />
    </View>
  )
}

export default SearchContent

const styles = StyleSheet.create({
  container:{
    padding: 16,
  },
  input: {
    height: 40,
    borderRadius: 8,
    backgroundColor: '#fff',
    color: '#000',
  },
})