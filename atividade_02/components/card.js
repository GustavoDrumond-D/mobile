import { StyleSheet, Image, View, Text } from 'react-native';

export default function FilmeCard({ filme }) {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: filme.posterUrl }} 
        style={styles.poster} 
      />
      <Text style={styles.movieTitle}>Filme: {filme.title}</Text>
      <Text style={styles.movieTitle}>Ano: {filme.year}</Text>
      <Text style={styles.movieTitle}>Tempo de duração{filme.runtime}</Text>
      <Text style={styles.movieTitle}>Diretor: {filme.director}</Text>
      <Text style={styles.movieTitle}>Atores: {filme.actors}</Text>
      <Text style={styles.movieTitle}>Descrição: {filme.plot}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#000000",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 12,
    elevation: 3,
    marginHorizontal: 10,
  },
  poster: {
    width: "100%",
    height: 150,
    resizeMode: "cover",
    marginBottom: 10,
  },
  movieTitle: {
    padding: 10,
    color: "#ffffff",
    fontSize: 16,
    fontFamily: 'Inter-Light',
  },
});