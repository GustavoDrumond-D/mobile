import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Modal, ScrollView } from 'react-native';
import styles from './styles';

export default function FilmeCard({ filme, cardWidth }) {
  const [modalVisible, setModalVisible] = useState(false);
  const screenWidth = Dimensions.get('window').width;
  const screenHeight = Dimensions.get('window').height;

  const atores = filme.actors.split(',').map(ator => ator.trim());

  return (
    <View style={[styles.cardContainer, { width: cardWidth }]}>
      <TouchableOpacity 
        onPress={() => setModalVisible(true)} 
        style={styles.card}
        activeOpacity={0.8}
      >
        <Image 
          source={{ uri: filme.posterUrl }} 
          style={[styles.poster, { height: cardWidth * 1.5 }]} 
        />
        <Text style={styles.movieTitle} numberOfLines={1}>
          {filme.title} ({filme.year})
        </Text>
      </TouchableOpacity>

      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={[styles.modalContent, { width: screenWidth * 0.9, maxHeight: screenHeight * 0.8 }]}>
            <ScrollView contentContainerStyle={styles.scrollViewContent}>
              <Image source={{ uri: filme.posterUrl }} style={styles.posterExpandido} />
              
              <Text style={styles.movieTitleExpandido}>{filme.title} ({filme.year})</Text>
              
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Duração:</Text>
                <Text style={styles.detailsValue}>{filme.runtime}</Text>
              </View>
              
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Diretor:</Text>
                <Text style={styles.detailsValue}>{filme.director}</Text>
              </View>
              
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Gêneros:</Text>
                <Text style={styles.detailsValue}>{filme.genres.join(', ')}</Text>
              </View>
              
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Elenco:</Text>
                <View style={styles.elencoContainer}>
                  {atores.map((ator, index) => (
                    <Text key={index} style={styles.atorText}>• {ator}</Text>
                  ))}
                </View>
              </View>
              
              <View style={styles.detailsSection}>
                <Text style={styles.detailsLabel}>Sinopse:</Text>
                <Text style={styles.plotText}>{filme.plot}</Text>
              </View>
              
              <TouchableOpacity 
                style={styles.closeButton}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.closeButtonText}>Fechar</Text>
              </TouchableOpacity>
            </ScrollView>
          </View>
        </View>
      </Modal>
    </View>
  );
}

