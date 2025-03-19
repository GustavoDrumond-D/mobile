import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Card from './components/card';

const carros = [
  {
    id: 1,
    marca: 'Toyota',
    modelo: 'Supra',
    ano: 2020,
    cor: 'Preto',
    descricao: 'Toyota Supra é um carro esportivo icônico, com design aerodinâmico e desempenho de alta performance, ideal para quem busca velocidade e estilo.',
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
    descricao: 'O Honda Civic é um sedã elegante e confiável, conhecido pela sua eficiência de combustível, conforto e tecnologia avançada.',
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
    descricao: 'O Fiat Cronos é um sedã compacto, moderno e econômico, com um design sofisticado e recursos de segurança avançados.',
    preco: 90000,
    avaliacao: 4.8,
    image: 'https://www.autocerto.com/fotos/440/2234511/1.jpg'
  },
  {
    id: 4,
    marca: 'Peugeot',
    modelo: 'Kwid',
    ano: 2020,
    cor: 'Branco',
    descricao: 'O Peugeot Kwid é um compacto urbano, ideal para quem busca um carro ágil, com baixo custo de manutenção e excelente consumo de combustível.',
    preco: 70000,
    avaliacao: 4.6,
    image: 'https://catarina-prd.s3.sa-east-1.amazonaws.com/0850d4c827a0b45a6bfaa3b6845cba11.jpeg'
  },
  {
    id: 5,
    marca: 'Chevrolet',
    modelo: 'Onix',
    ano: 2022,
    cor: 'Preto',
    descricao: 'O Chevrolet Onix é um carro compacto, moderno e versátil, oferecendo um bom desempenho e conectividade, ideal para o uso urbano.',
    preco: 80000,
    avaliacao: 4.7,
    image: 'https://i.ytimg.com/vi/MRRy_Q-qP0g/maxresdefault.jpg'
  },
  {
    id: 6,
    marca: 'Fiat',
    modelo: 'Palio',
    ano: 2020,
    cor: 'Vermelho',
    descricao: 'O Fiat Palio é um carro prático e acessível, conhecido por sua robustez, economia e facilidade de manutenção, perfeito para o dia a dia.',
    preco: 60000,
    avaliacao: 4.4,
    image: 'https://lh4.googleusercontent.com/M1fqqSs3Uo-auhQP5jMGjQcKzPgw94YSK4SABlVkTPCO48HBmvgEkmGMVnazfTd0PaFvMF_ViQg4G9WOOh0Eb5BkqtL1wrGcSi5NSTsChXSX9Glyx1rGGNR4Nlf1-8zCLKujOpat'
  },
];

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Lista de Carros</Text>

      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {carros.map((carro) => (
          <Card key={carro.id} carro={carro} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#0a7ea4',
  },
  scrollViewContent: {
    alignItems: 'center',
  },
});
