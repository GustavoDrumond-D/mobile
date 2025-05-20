import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import NavBar from '../components/NavBar';

export default function RegisterPage({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleRegister = () => {
    if (!name || !email || !password) {
      setError('Preencha todos os campos');
      return;
    }
    navigation.navigate('Login');
  };

  return (
    <View style={styles.container}>
      <NavBar />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Registro</Text>
        
        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TextInput
          style={styles.input}
          placeholder="Nome completo"
          placeholderTextColor="#666"
          value={name}
          onChangeText={setName}
        />

        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#666"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Senha"
          placeholderTextColor="#666"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={styles.linkContainer}
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.linkText}>Já tem conta? Faça login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  content: {
    flex: 1,
    paddingTop: 40,
    paddingHorizontal: 30,
  },
  title: {
    color: '#FFD700',
    fontSize: 28,
    fontFamily: 'Inter-Bold',
    marginBottom: 40,
    textAlign: 'center',
  },
  input: {
    backgroundColor: '#1a1a1a',
    color: '#FFF',
    borderRadius: 8,
    padding: 15,
    marginBottom: 20,
    fontFamily: 'Inter-Light',
    fontSize: 16,
  },
  button: {
    backgroundColor: '#FFD700',
    borderRadius: 8,
    padding: 18,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#000',
    fontFamily: 'Inter-Bold',
    fontSize: 16,
  },
  linkContainer: {
    marginTop: 30,
    alignItems: 'center',
  },
  linkText: {
    color: '#FFD700',
    fontFamily: 'Inter-Light',
    textDecorationLine: 'underline',
  },
  errorText: {
    color: '#FF4444',
    fontFamily: 'Inter-Light',
    marginBottom: 20,
    textAlign: 'center',
  },
});