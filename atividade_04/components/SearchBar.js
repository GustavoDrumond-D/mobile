import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ value, onChangeText }) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Pesquisar filmes..."
        placeholderTextColor="#888"
        value={value}
        onChangeText={onChangeText}
        clearButtonMode="while-editing"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#121212',
  },
  input: {
    height: 40,
    backgroundColor: '#1a1a1a',
    color: '#FFF',
    borderRadius: 20,
    paddingHorizontal: 15,
    fontSize: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
});

export default SearchBar;