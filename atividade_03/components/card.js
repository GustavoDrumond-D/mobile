import { useState } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';

export default function Card({ carro }) {
    const [expandido, setExpandido] = useState(false);

    return (
        <TouchableOpacity onPress={() => setExpandido(!expandido)} style={styles.card}>
            <Image source={{ uri: carro.image }} style={styles.image} />
            <Text style={styles.cardText}>{carro.marca} {carro.modelo}</Text>
            {expandido && (
                <View style={styles.detalhes}>
                    <Text style={styles.detailsText}>Ano: {carro.ano}</Text>
                    <Text style={styles.detailsText}>Cor: {carro.cor}</Text>
                    <Text style={styles.detailsText}>Preco: R${carro.preco.toLocaleString('pt-BR')}</Text>
                    <Text style={styles.detailsText}>Avaliação: {carro.avaliacao}☆</Text>
                </View>
            )}

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#f9f9f9',
        padding: 10,
        marginBottom: 10,
        borderRadius: 8,
        width: 300,
        alignItems: 'center',
    },
    cardText: {
        fontSize: 16,
        color: '#333',
        fontFamily: 'BigShoulders',
        fontFamily: 'Inter_400Regular'
    },
    image: {
        width: '100%',
        height: 150,
        borderRadius: 8
    },
    detalhes: {
        marginTop: 8,
        backgroundColor: '#ddd',
        padding: 10,
        borderRadius: 8,
        width: '100%',
        alignItems: 'center'
    },
      detailsText: {
        fontFamily: 'Inter_400Regular'
    }
})