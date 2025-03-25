import { StyleSheet, Image, View, Text } from 'react-native';

export default function FilmeCard({ filme }) {
  return (
    <View style={styles.card}>
      <Image 
        source={{ uri: filme.posterUrl }} 
        style={styles.poster} 
      />
      <Text style={styles.movieTitle}>{filme.title}</Text>
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