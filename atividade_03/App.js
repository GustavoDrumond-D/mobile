import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { useFonts, Inter_400Regular } from '@expo-google-fonts/inter';
import Card from './components/card';

const carros = [
  {
    id: 1,
    marca: 'Toyota',
    modelo: 'Supra',
    ano: 2020,
    cor: 'Preto',
    preco: 100.000,
    avaliacao: 4.5,
    image: "https://uploads.automaistv.com.br/2024/11/5zx8rK8t-Toyota-GR-Supra-A90-edicao-de-despedida-Abre-jpg.webp"
  },
  {
    id: 2,
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2019,
    cor: 'Branco',
    preco: 80.000,
    avaliacao: 4.2,
    image: 'https://image1.mobiauto.com.br/images/api/images/v1.0/12434410/transform/fl_progressive,f_webp,q_80'
  },
  {
    id: 3,
    marca: 'Fiat',
    modelo: 'Cronos',
    ano: 2022,
    cor: 'Vermelho',
    preco: 90.000,
    avaliacao: 4.8,
    image: 'https://www.autocerto.com/fotos/440/2234511/1.jpg'
  },
  {
    id: 4,
    marca: 'Peugeot',
    modelo: 'Kwid',
    ano: 2020,
    cor: 'Branco',
    preco: 70.000,
    avaliacao: 4.6,
    image: 'https://catarina-prd.s3.sa-east-1.amazonaws.com/0850d4c827a0b45a6bfaa3b6845cba11.jpeg'
  },
  {
    id: 5,
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: 2022,
    cor: 'Preto',
    preco: 80.000,
    avaliacao: 4.7,
    image: 'https://i.ytimg.com/vi/MRRy_Q-qP0g/maxresdefault.jpg'
  },
  {
    id: 6,
    marca: 'Fiat',
    modelo: 'Palio',
    ano: 2020,
    cor: 'Vermelho',
    preco: 60.000,
    avaliacao: 4.4,
    image: 'https://lh4.googleusercontent.com/M1fqqSs3Uo-auhQP5jMGjQcKzPgw94YSK4SABlVkTPCO48HBmvgEkmGMVnazfTd0PaFvMF_ViQg4G9WOOh0Eb5BkqtL1wrGcSi5NSTsChXSX9Glyx1rGGNR4Nlf1-8zCLKujOpat'
  },
]

export default function App() {
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
          <Card carro={item} />
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
    fontFamily: 'BigShoulders',
    fontFamily: 'Inter_400Regular'
  },
});
