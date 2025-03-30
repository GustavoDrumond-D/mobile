import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text, Dimensions } from 'react-native';
import FilmeCard from './components/card';
import dados from './db.json';
import NavBar from './components/NavBar';
import SearchBar from './components/SearchBar';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const screenWidth = Dimensions.get('window').width;
  const cardWidth = (screenWidth - 40) / 3;

  // Filtra os filmes baseado na pesquisa
  const filteredMovies = dados.movies.filter(movie =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Header fixo no topo */}
      <View style={styles.header}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>Catálogo de Filmes</Text>
        </View>
        <SearchBar 
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        <NavBar />
      </View>

      {/* Conteúdo scrollável */}
      <ScrollView 
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
      >
        <View style={styles.gridContainer}>
          {filteredMovies.map((filme) => (
            <View key={filme.id} style={[styles.cardWrapper, { width: cardWidth }]}>
              <FilmeCard filme={filme} cardWidth={cardWidth} />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  header: {
    paddingTop: 35,
    paddingHorizontal: 10,
    backgroundColor: '#121212',
    zIndex: 100,
  },
  titleContainer: {
    backgroundColor: '#000000',
    padding: 15,
    borderRadius: 8,
    marginBottom: 5,
  },
  title: {
    color: '#FFD700',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  scrollView: {
    flex: 1,
    marginTop: 5,
  },
  scrollContent: {
    paddingBottom: 20,
    paddingHorizontal: 10,
  },
  gridContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  cardWrapper: {
    marginBottom: 15,
    aspectRatio: 0.67,
  },
});