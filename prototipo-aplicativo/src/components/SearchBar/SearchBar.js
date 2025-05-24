import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './styles';

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

export default SearchBar;