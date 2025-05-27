import React, { useState, useEffect } from 'react';
import { View, FlatList, Text,ActivityIndicator, Dimensions
} from 'react-native';
import { db, auth } from '../../services/firebase';
import { collection, getDocs } from 'firebase/firestore';
import FilmeCard from '../../components/card/card';
import NavBar from '../../components/NavBar/NavBar';
import styles from './styles';

export default function FavoritesPage() {
  const [favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');


  useEffect(() => {
    const fetchFavorites = async () => {
      if (!auth.currentUser) {
        setError('Faça login para ver seus favoritos');
        setLoading(false);
        return;
      }

      try {
        const favoritesRef = collection(
          db,
          'favorites',
          auth.currentUser.uid,
          'userFavorites'
        );
        const querySnapshot = await getDocs(favoritesRef);
        const favs = querySnapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFavorites(favs);
        setError('');
      } catch (error) {
        console.error('Error fetching favorites:', error);
        setError('Erro ao carregar favoritos');
      } finally {
        setLoading(false);
      }
    };
    fetchFavorites();
  }, []);


  return (
    <View style={styles.container}>
      <NavBar />
      {loading ? (
        <ActivityIndicator size="large" color="#FFD700" style={styles.loader} />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : favorites.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum filme favoritado ainda</Text>
      ) : (
        <FlatList data={favorites} keyExtractor={(item) => item.id} renderItem={({ item }) => (
            <FilmeCard
              filme={{
                ...item,
                imdbID: item.id,
                posterUrl: item.posterUrl || 'https://via.placeholder.com/150x225?text=No+Poster',
                director: item.director || 'N/A',
                actors: item.actors || 'N/A',
                plot: item.plot || 'Sinopse não disponível',
                genres: item.genres || [],
                runtime: item.runtime || 'N/A'
              }}
              cardWidth={Dimensions.get('window').width - 20}
            />
          )}
          contentContainerStyle={styles.listContainer}
        />
      )}
    </View>
  );
}