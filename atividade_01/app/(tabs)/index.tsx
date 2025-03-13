import { Image, StyleSheet, Platform } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const carros = [
  {
    id: 1,
    marca: 'Toyota',
    modelo: 'Supra',
    ano: 2020,
    cor: 'Preto',
    image: "https://uploads.automaistv.com.br/2024/11/5zx8rK8t-Toyota-GR-Supra-A90-edicao-de-despedida-Abre-jpg.webp  "
  },
  {
    id: 2,
    marca: 'Honda',
    modelo: 'Civic',
    ano: 2019,
    cor: 'Branco',
    image: 'https://image1.mobiauto.com.br/images/api/images/v1.0/12434410/transform/fl_progressive,f_webp,q_80'
  },
  {
    id: 3,
    marca: 'Fiat',
    modelo: 'Cronos',
    ano: 2022,
    cor: 'Vermelho',
    image: 'https://www.autocerto.com/fotos/440/2234511/1.jpg'
  },
  {
    id: 4,
    marca: 'Peugeot',
    modelo: 'Kwid',
    ano: 2020,
    cor: 'Branco',
    image: 'https://catarina-prd.s3.sa-east-1.amazonaws.com/0850d4c827a0b45a6bfaa3b6845cba11.jpeg'
  },
  {
    id: 5,
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: 2022,
    cor: 'Preto',
    image: 'https://i.ytimg.com/vi/MRRy_Q-qP0g/maxresdefault.jpg'
  },
  {
    id: 6,
    marca: 'Fiat',
    modelo: 'Palio',
    ano: 2020,
    cor: 'Vermelho',
    image: 'https://lh4.googleusercontent.com/M1fqqSs3Uo-auhQP5jMGjQcKzPgw94YSK4SABlVkTPCO48HBmvgEkmGMVnazfTd0PaFvMF_ViQg4G9WOOh0Eb5BkqtL1wrGcSi5NSTsChXSX9Glyx1rGGNR4Nlf1-8zCLKujOpat'
  },
]

export default function HomeScreen() {
  return (
    <>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Atividade 01</ThemedText>
      </ThemedView>

      {carros.map((carro) => (
        <ThemedView key={carro.id} style={styles.blocos}>
          <Image source={{ uri: carro.image }} style={styles.imagensCarros} />
          <ThemedText type="subtitle">Marca: {carro.marca}</ThemedText>
          <ThemedText type="subtitle">Modelo: {carro.modelo}</ThemedText>
          <ThemedText type="subtitle">Ano: {carro.ano}</ThemedText>
          <ThemedText type="subtitle">Cor: {carro.cor}</ThemedText>
        </ThemedView>
      ))}
    </>

  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginBottom: 10,
  },
  blocos: {
    backgroundColor: "#fff",
    borderRadius: 10,
    overflow: "hidden",
    marginBottom: 12,
    elevation: 3,
  },
  imagensCarros: {
    width: "100%",
    height: 150,
  },
});