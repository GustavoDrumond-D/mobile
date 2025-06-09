# Prototipo Aplicativo

Este é um protótipo de aplicativo mobile para catálogo de filmes, desenvolvido em React Native com Expo e integração com Firebase.

## Funcionalidades

- Listagem de filmes (OMDb API)
- Busca e filtros
- Favoritar filmes (Firebase Firestore)
- Autenticação de usuário (Firebase Auth)
- Edição de perfil
- Interface responsiva e moderna

## Instalação

1. **Clone o repositório:**
   ```sh
   git clone https://github.com/seu-usuario/seu-repo.git
   cd prototipo-aplicativo
   ```

2. **Instale as dependências:**
   ```sh
   npm install
   ```

3. **Instale o Expo CLI (caso não tenha):**
   ```sh
   npm install -g expo-cli
   ```

## Dependências principais

- [expo](https://docs.expo.dev/)
- [react-native](https://reactnative.dev/)
- [@react-navigation/native](https://reactnavigation.org/)
- [@react-navigation/native-stack](https://reactnavigation.org/docs/native-stack-navigator/)
- [firebase](https://firebase.google.com/docs/web/setup)
- [@expo/vector-icons](https://docs.expo.dev/guides/icons/)
- [@expo-google-fonts/inter](https://github.com/expo/google-fonts)
- [@react-native-picker/picker](https://github.com/react-native-picker/picker)
- [@react-native-community/slider](https://github.com/callstack/react-native-slider)

> Todas as dependências estão listadas no arquivo [package.json](c:/Users/Gustavo/Documents/codes/mobile/prototipo-aplicativo/package.json).

## Como rodar o projeto

1. **Inicie o servidor de desenvolvimento:**
   ```sh
   npx expo start
   ```

2. **Abra o app:**
   - Use o app Expo Go no seu celular (Android/iOS) e escaneie o QR code.
   - Ou rode em um emulador Android/iOS.

## Configuração do Firebase

O projeto já está configurado para usar Firebase (ver [firebaseConfig.js](c:/Users/Gustavo/Documents/codes/mobile/prototipo-aplicativo/firebaseConfig.js)). Caso queira usar seu próprio projeto Firebase, substitua as credenciais nesse arquivo.

---

## Estrutura de pastas

```
src/
  components/
  hooks/
  navigation/
  screens/
  services/
```

---

## Scripts úteis

- `npm start` — Inicia o Expo
- `npm install` — Instala as dependências

---

## Compatibilidade de Versões

Este projeto foi desenvolvido com versões específicas (e intencionalmente desatualizadas) das dependências para garantir estabilidade em um ambiente já testado.

### Pacotes com versões definidas

| Pacote               | Versão Usada | Versão Recomendada (Expo) |
|----------------------|--------------|---------------------------|
| `expo`               | `53.0.9`     | `53.0.11`                 |
| `react`              | `19.1.0`     | `19.0.0`                  |
| `react-dom`          | `19.1.0`     | `19.0.0`                  |
| `react-native`       | `0.79.2`     | `0.79.3`                  |
| `react-native-screens` | `4.10.0`   | `~4.11.1`                 |

### Por que não atualizar?

- Funcionalidades críticas do app foram testadas e validadas nessas versões
- Evita quebras inesperadas em bibliotecas de terceiros (ex: navegação, Firebase)

### Se desejar atualizar

Caso prefira usar as versões mais recentes, execute:

```sh
npx expo install expo@53.0.11 react@19.0.0 react-dom@19.0.0 react-native@0.79.3 react-native-screens@4.11.1

---

## Observações

- Certifique-se de ter o Node.js e o npm instalados.
- Para usar autenticação e favoritos, é necessário criar uma conta (registro dentro do app).

---

Qualquer dúvida, consulte a documentação das dependências ou abra uma issue!