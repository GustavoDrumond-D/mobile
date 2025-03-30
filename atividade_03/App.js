import React from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions } from 'react-native';
import FilmeCard from './components/card';
import dados from './db.json';

export default function App() {
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 40) / 3;

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Catálogo de Filmes</Text>
      </View>

      <View style={styles.gridContainer}>
        {dados.movies.map((filme) => (
          <View key={filme.id} style={[styles.cardWrapper, { width: cardWidth }]}>
            <FilmeCard filme={filme} cardWidth={cardWidth} />
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    paddingTop: 20,
  },
  titleContainer: {
    backgroundColor: '#000000',
    padding: 15,
    marginBottom: 15,
    marginHorizontal: 10,
    borderRadius: 8,
  },
  title: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  cardWrapper: {
    marginBottom: 15,
    aspectRatio: 0.67,
  },
});