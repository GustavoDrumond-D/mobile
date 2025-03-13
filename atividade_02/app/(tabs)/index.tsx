import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Image, StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';

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

export default function HomeScreen() {
  const [cardsExpandidos, setCardsExpandidos] = useState({});

  const toggleExpandirCard = (id: string | number) => {
    setCardsExpandidos((prevState) => ({
      ...prevState,
      [id]: !prevState[id] || false
    }));
  };
  

  return (
    <View style={styles.container}>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.title}>Atividade 02</ThemedText>
      </ThemedView>

      <ThemedText style={styles.subtitle}>Carros:</ThemedText>

      <FlatList
        data={carros}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => toggleExpandirCard(item.id)} style={styles.card}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <Text style={styles.cardText}>{item.marca} {item.modelo}</Text>

            {cardsExpandidos[item.id] && (
              <View style={styles.detalhes}>
                <Text>Ano: {item.ano}</Text>
                <Text>Cor: {item.cor}</Text>
                <Text>Preco: R${item.preco.toFixed(3)}</Text>
                <Text>Avaliacao: {item.avaliacao}☆</Text>

              </View>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row', // Alinha os elementos horizontalmente
    gap: 8, // Espaçamento entre os elementos
    marginBottom: 10, // Espaçamento inferior
    alignItems: 'center', // Centraliza verticalmente
    justifyContent: 'center', // Centraliza horizontalmente
    padding: 10, // Espaçamento interno
    backgroundColor: '#e5e5e5', // Cor de fundo
    borderRadius: 8, // Borda arredondada
  },
  container: {
    flex: 1, // Ocupa todo o espaço disponível
    padding: 16, // Espaçamento interno
  },
  title: {
    fontSize: 24, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
    color: '#0a7ea4', // Cor
  },
  subtitle: {
    fontSize: 18, // Tamanho da fonte
    fontWeight: 'bold', // Negrito
    marginBottom: 8, // Espaçamento inferior
    color: '#0a7ea4', // Cor
  },
  card: {
    backgroundColor: '#f9f9f9', // Cor de fundo
    padding: 10, // Espaçamento interno
    marginBottom: 10, // Espaçamento inferior
    borderRadius: 8, // Borda arredondada
  },
  cardText: {
    fontSize: 16, // Tamanho da fonte
    color: '#333', // Cor
  },
  image: {
    width: '100%', // Ocupa todo o espaço horizontal
    height: 150, // Altura da imagem
    borderRadius: 8, // Borda arredondada
  },
  detalhes: {
    marginTop: 8, // Espaçamento superior
    backgroundColor: '#ddd', // Cor de fundo
    padding: 10, // Espaçamento interno
    borderRadius: 8, // Borda arredondada
  },
});
