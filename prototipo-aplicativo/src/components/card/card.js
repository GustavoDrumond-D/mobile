import React, { useState, useEffect } from 'react';
import { Text, View, Image, TouchableOpacity, Dimensions, Modal, ScrollView, Alert } from 'react-native';
import { db, auth } from '../../services/firebase';
import { doc, setDoc, deleteDoc, getDoc } from 'firebase/firestore';
import styles from './styles';

export default function FilmeCard({ filme, cardWidth }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;


  const movieData = {
    imdbID: filme.imdbID || '',
    title: filme.title || 'Título desconhecido',
    year: filme.year || 'N/A',
    posterUrl: filme.posterUrl || 'https://via.placeholder.com/150x225?text=No+Poster',
    director: filme.director || 'N/A',
    actors: filme.actors || 'N/A',
    plot: filme.plot || 'Sinopse não disponível',
    genres: filme.genres || [],
    runtime: filme.runtime || 'N/A'
  };


  const atores = movieData.actors.split(',').map(ator => ator.trim()) || [];


  useEffect(() => {
    const checkFavoriteStatus = async () => {
      if (auth.currentUser) {
        const favoriteRef = doc(
          db, 
          'favorites', 
          auth.currentUser.uid, 
          'userFavorites', 
          movieData.imdbID
        );
        
        const docSnap = await getDoc(favoriteRef);
        setIsFavorite(docSnap.exists());
      }
    };
    
    checkFavoriteStatus();
  }, [movieData.imdbID]);


  const toggleFavorite = async () => {
    if (!auth.currentUser) {
      Alert.alert('Atenção', 'Faça login para adicionar aos favoritos!');
      return;
    }

    try {
      const favoriteRef = doc(
        db, 
        'favorites', 
        auth.currentUser.uid, 
        'userFavorites', 
        movieData.imdbID
      );

      if (isFavorite) {
        await deleteDoc(favoriteRef);
      } else {
        await setDoc(favoriteRef, {
          ...movieData,
          userId: auth.currentUser.uid,
          timestamp: new Date(),
        });
      }
      setIsFavorite(!isFavorite);
    } catch (error) {
      console.error('Erro ao atualizar favoritos:', error);
      Alert.alert('Erro', 'Não foi possível atualizar os favoritos');
    }
  };


  return (
    <View style={[styles.cardContainer, { width: cardWidth }]}>
      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.card} activeOpacity={0.8}>
        <Image source={{ uri: movieData.posterUrl }} style={[styles.poster, { height: cardWidth * 1.5 }]}/>
        <TouchableOpacity style={styles.favoriteButton} onPress={(e) => {e.stopPropagation(); toggleFavorite();}}>
          <Text style={styles.favoriteIcon}>
            {isFavorite ? '❤️' : '🤍'}
          </Text>
        </TouchableOpacity>

        <Text style={styles.movieTitle} numberOfLines={1}>
          {movieData.title} ({movieData.year})
        </Text>
      </TouchableOpacity>

      <Modal visible={modalVisible} transparent={true} animationType="slide" onRequestClose={() => setModalVisible(false)}>
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { width: screenWidth * 0.9, maxHeight: screenHeight * 0.8 }]}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <Image source={{ uri: movieData.posterUrl }} style={styles.posterExpandido} />
              
              <Text style={styles.movieTitleExpandido}>
                {movieData.title} ({movieData.year})
              </Text>
              
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Duração:</Text>
                <Text style={styles.detailsValue}>{movieData.runtime}</Text>
              </View>
              
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Diretor:</Text>
                <Text style={styles.detailsValue}>{movieData.director}</Text>
              </View>
              
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Gêneros:</Text>
                <Text style={styles.detailsValue}>
                  {movieData.genres.join(', ') || 'N/A'}
                </Text>
              </View>
              
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Elenco:</Text>
                <View style={styles.elencoContainer}>
                  {atores.map((ator, index) => (
                    <Text key={index} style={styles.atorText}>
                      • {ator}
                    </Text>
                  ))}
                </View>
              </View>
              
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Sinopse:</Text>
                <Text style={styles.plotText}>
                  {movieData.plot}
                </Text>
              </View>

              <TouchableOpacity style={styles.closeButton} onPress={() => setModalVisible(false)} >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}
