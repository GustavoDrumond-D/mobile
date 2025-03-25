import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

export default function FilmeCard({ filme }) {
    const [expandido, setExpandido] = useState(false);

    return (
        <TouchableOpacity 
            onPress={() => setExpandido(!expandido)} 
            style={styles.card}
            activeOpacity={0.8}
        >
            <Image source={{ uri: filme.posterUrl }} style={styles.poster} />
            <Text style={styles.movieTitle}>{filme.title} ({filme.year})</Text>
            
            {expandido && (
                <View style={styles.details}>
                    <Text style={styles.detailsText}>Duração: {filme.runtime} min</Text>
                    <Text style={styles.detailsText}>Diretor: {filme.director}</Text>
                    <Text style={styles.detailsText}>Gêneros: {filme.genres.join(', ')}</Text>
                    <Text style={styles.detailsText}>Elenco: {filme.actors}</Text>
                    <Text style={styles.plotText}>Sinopse: {filme.plot}</Text>
                </View>
            )}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: "#1a1a1a",
        borderRadius: 10,
        overflow: "hidden",
        marginBottom: 12,
        elevation: 3,
        marginHorizontal: 10,
    },
    poster: {
        width: "100%",
        height: 200,
        resizeMode: "cover",
    },
    movieTitle: {
        padding: 12,
        color: "#FFD700",
        fontSize: 16,
        fontFamily: 'Inter-Bold',
    },
    details: {
        padding: 12,
        backgroundColor: '#2a2a2a',
        borderTopWidth: 1,
        borderTopColor: '#333',
    },
    detailsText: {
        color: "#ffffff",
        fontSize: 14,
        marginBottom: 6,
        fontFamily: 'Inter-Light',
    },
    plotText: {
        color: "#ffffff",
        fontSize: 14,
        marginTop: 8,
        fontStyle: 'italic',
        fontFamily: 'Inter-Light',
    }
});