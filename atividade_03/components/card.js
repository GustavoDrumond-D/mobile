import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions, Button, Modal, ScrollView } from 'react-native';

export default function Card({ carro }) {
    const [expandido, setExpandido] = useState(false);
    const screenWidth = Dimensions.get('window').width;
    const screenHeight = Dimensions.get('window').height;

    return (
        <View style={styles.cardContainer}>
            {/* Card Normal */}
            <TouchableOpacity onPress={() => setExpandido(true)} style={styles.card}>
                <Image source={{ uri: carro.image }} style={styles.image} />
                <Text style={styles.cardText}>{carro.marca} {carro.modelo}</Text>
            </TouchableOpacity>

            {/* Modal para o Card Expandido */}
            <Modal
                visible={expandido}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setExpandido(false)}
            >
                <View style={styles.modalOverlay}>
                    <View style={[styles.modalContent, { width: screenWidth * 0.9, maxHeight: screenHeight * 0.8 }]}>
                        <ScrollView contentContainerStyle={styles.scrollViewContent}>
                            <Image source={{ uri: carro.image }} style={styles.imageExpandida} />
                            <Text style={styles.cardTextExpandido}>{carro.marca} {carro.modelo}</Text>
                            <Text style={styles.detailsText}>Ano: {carro.ano}</Text>
                            <Text style={styles.detailsText}>Cor: {carro.cor}</Text>
                            <Text style={styles.detailsText}>Descrição: {carro.descricao}</Text>
                            <Text style={styles.detailsText}>Preço: R${carro.preco.toLocaleString('pt-BR')}</Text>
                            <Text style={styles.detailsText}>Avaliação: {carro.avaliacao}☆</Text>
                            <Button title="Fechar" onPress={() => setExpandido(false)} />
                        </ScrollView>
                    </View>
                </View>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    cardContainer: {
        marginBottom: 10,
    },
    card: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        borderRadius: 8,
        width: 300,
        alignItems: 'center',
    },
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContent: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 20,
    },
    scrollViewContent: {
        alignItems: 'center',
    },
    cardText: {
        fontSize: 16,
        color: '#333',
    },
    cardTextExpandido: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8,
    },
    imageExpandida: {
        width: '100%',
        height: 200,
        borderRadius: 8,
        marginBottom: 10,
    },
    detailsText: {
        fontSize: 16,
        marginBottom: 10,
    },
});