import React, { useState, useCallback } from 'react';
import { View, FlatList, StyleSheet, ActivityIndicator, Keyboard, Dimensions, TouchableOpacity, TextInput, Text } from 'react-native';
import FilmeCard from '../../components/card/card';
import NavBar from '../../components/NavBar/NavBar';
import styles from './styles';

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);


  const handleSearch = useCallback(async (page = 1) => {
    if (searchQuery.trim() === '') {
      setSearchResults([]);
      setError('');
      return;
    }
    try {
      setLoading(true);
      Keyboard.dismiss();
      
      const response = await fetch(
        `https://www.omdbapi.com/?s=${encodeURIComponent(searchQuery)}&page=${page}&apikey=979e5f0b`
      );
      
      const data = await response.json();
      
      if (data.Response === 'True') {
        setSearchResults(prev => page === 1 ? data.Search : [...prev, ...data.Search]);
        setTotalPages(Math.ceil(data.totalResults / 10));
        setError('');
      } else {
        setSearchResults([]);
        setError(data.Error || 'Nenhum resultado encontrado');
      }
    } catch (error) {
      setError('Erro na conexão com o servidor');
      console.error('Search error:', error);
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);


  const loadMoreResults = () => {
    if (currentPage < totalPages && !loading) {
      setCurrentPage(prev => prev + 1);
      handleSearch(currentPage + 1);
    }
  };


  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.searchContainer}>
        <TextInput style={styles.searchInput} placeholder="Pesquisar filmes..." placeholderTextColor="#888" value={searchQuery} onChangeText={setSearchQuery} onSubmitEditing={() => { setCurrentPage(1); handleSearch(1);}} returnKeyType="search"/>
      </View>

      {loading && <ActivityIndicator size="large" color="#FFD700" style={styles.loader} />}

      {error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : searchResults.length > 0 ? (
        <FlatList data={searchResults} keyExtractor={(item) => item.imdbID} renderItem={({ item }) => (
            <FilmeCard 
              filme={{
                imdbID: item.imdbID,
                title: item.Title,
                year: item.Year,
                posterUrl: item.Poster,
                director: item.Director || 'N/A',
                actors: item.Actors || 'N/A',
                plot: item.Plot || 'Sinopse não disponível',
                genres: item.Genre ? item.Genre.split(', ') : [],
                runtime: item.Runtime || 'N/A'
              }}
              cardWidth={Dimensions.get('window').width - 20} />
          )}
          contentContainerStyle={styles.listContainer}
          onEndReached={loadMoreResults}
          onEndReachedThreshold={0.5}
          ListFooterComponent={
            currentPage < totalPages && !loading ? (
              <ActivityIndicator size="small" color="#FFD700" />
            ) : null
          }
        />
      ) : (
        !loading && <Text style={styles.emptyText}>Digite um termo para pesquisar filmes</Text>
      )}
    </View>
  );
}