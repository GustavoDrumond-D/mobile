import { useFonts, Inter_300Light, Inter_700Bold } from '@expo-google-fonts/inter';
import { ScrollView, StyleSheet, View, Text, ActivityIndicator } from 'react-native';
import FilmeCard from './components/card';
import dados from './db.json';

export default function App() {
  let [fontsLoaded] = useFonts({
    'Inter-Light': Inter_300Light,
    'Inter-Bold': Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large" color="#FFD700" style={{flex: 1, justifyContent: 'center'}} />;
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>Catálogo de Filmes</Text>
      </View>

      <View style={styles.listContainer}>
        {dados.movies.map((filme) => (
          <FilmeCard key={filme.id} filme={filme} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  titleContainer: {
    backgroundColor: '#000000',
    padding: 15,
    marginBottom: 10,
  },
  title: {
    color: '#FFD700',
    fontSize: 20,
    fontFamily: 'Inter-Bold',
    textAlign: 'center',
  },
  listContainer: {
    paddingHorizontal: 10,
  },
});