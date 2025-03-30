import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Modal, ScrollView } from 'react-native';

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
                {/* IMAGEM: Reduzi a altura para deixar espaço para o título */}
                <Image 
                    source={{ uri: filme.posterUrl }} 
                    style={[styles.poster, { height: cardWidth * 1.3 }]}  // De 1.5 para 1.3
                />
                
                {/* TÍTULO: Container com altura fixa e espaçamento */}
                <View style={styles.titleContainer}>
                    <Text 
                        style={styles.movieTitle} 
                        numberOfLines={2}  // Permite 2 linhas para títulos longos
                    >
                        {filme.title} ({filme.year})
                    </Text>
                </View>
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
                                <Text style={styles.detailsValue}>{filme.runtime} min</Text>
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

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 15,
    },
    card: {
        backgroundColor: "#1a1a1a",
        borderRadius: 8,
        overflow: "hidden",
        elevation: 3,
    },
    poster: {
        width: "100%",
        resizeMode: "cover",
    },
    titleContainer: {
        padding: 8,
        minHeight: 50,
        justifyContent: 'center',
    },
    movieTitle: {
        color: "#FFD700",
        fontSize: 12,
        fontFamily: 'Inter-Bold',
        textAlign: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
    },
    modalContent: {
        backgroundColor: '#1a1a1a',
        borderRadius: 10,
        padding: 20,
    },
    scrollViewContent: {
        paddingBottom: 20,
    },
    posterExpandido: {
        width: '100%',
        height: 250,
        resizeMode: 'contain',
        borderRadius: 5,
        marginBottom: 15,
    },
    movieTitleExpandido: {
        color: "#FFD700",
        fontSize: 22,
        fontFamily: 'Inter-Bold',
        textAlign: 'center',
        marginBottom: 15,
    },
    detailsSection: {
        marginBottom: 12,
    },
    detailsLabel: {
        color: "#FFD700",
        fontSize: 16,
        fontFamily: 'Inter-Bold',
        marginBottom: 3,
    },
    detailsValue: {
        color: "#ffffff",
        fontSize: 15,
        fontFamily: 'Inter-Light',
    },
    elencoContainer: {
        marginLeft: 10,
        marginTop: 5,
    },
    atorText: {
        color: "#ffffff",
        fontSize: 14,
        fontFamily: 'Inter-Light',
        marginBottom: 3,
    },
    plotText: {
        color: "#ffffff",
        fontSize: 14,
        fontFamily: 'Inter-Light',
        lineHeight: 20,
        textAlign: 'justify',
    },
    closeButton: {
        backgroundColor: '#FFD700',
        padding: 12,
        borderRadius: 5,
        marginTop: 15,
        alignItems: 'center',
    },
    closeButtonText: {
        color: '#000',
        fontFamily: 'Inter-Bold',
        fontSize: 16,
    },
});