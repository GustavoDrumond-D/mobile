import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';

const carros = [
  {
    id: 1,
    marca: 'Toyota',
    modelo: 'Supra',
    ano: 2020,
    cor: 'Preto',
    preco: 100000,
    avaliacao: 4.5,
    image: "https://uploads.automaistv.com.br/2024/11/5zx8rK8t-Toyota-GR-Supra-A90-edicao-de-despedida-Abre-jpg.webp"
  },
  {
    id: 2,
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2019,
    cor: 'Branco',
    preco: 80000,
    avaliacao: 4.2,
    image: 'https://image1.mobiauto.com.br/images/api/images/v1.0/12434410/transform/fl_progressive,f_webp,q_80'
  },
  {
    id: 3,
    marca: 'Fiat',
    modelo: 'Cronos',
    ano: 2022,
    cor: 'Vermelho',
    preco: 90000,
    avaliacao: 4.8,
    image: 'https://www.autocerto.com/fotos/440/2234511/1.jpg'
  }
];

export default function App() {
  const [fontsLoaded] = useFonts({
    'BigShoulders': require('./assets/fonts/BigShoulders-VariableFont.ttf'),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  const [cardsExpandidos, setCardsExpandidos] = useState({});

  const toggleExpandirCard = (id) => {
    setCardsExpandidos((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false
    }));
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Lista de Carros</Text>

      <FlatList
        data={carros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleExpandirCard(item.id)} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.cardText}>{item.marca} {item.modelo}</Text>

            {cardsExpandidos[item.id] && (
              <View style={styles.detalhes}>
                <Text style={styles.detailsText}>Ano: {item.ano}</Text>
                <Text style={styles.detailsText}>Cor: {item.cor}</Text>
                <Text style={styles.detailsText}>Preço: R${item.preco.toLocaleString('pt-BR')}</Text>
                <Text style={styles.detailsText}>Avaliação: {item.avaliacao}☆</Text>
              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0a7ea4',
    fontFamily: 'BigShoulders'
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 10,
    marginBottom: 10,
    borderRadius: 8,
    width: 300,
    alignItems: 'center'
  },
  cardText: {
    fontSize: 16,
    color: '#333',
    fontFamily: 'BigShoulders'
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
    fontFamily: 'BigShoulders'
  }
});
