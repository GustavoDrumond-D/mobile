import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, ScrollView, StyleSheet } from 'react-native';
import { register } from '../../services/auth';
import NavBar from '../../components/NavBar/NavBar';
import styles from './styles';

export default function RegisterPage({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');


  const handleRegister = async () => {
    if (!name || !email || !password) {
      setError('Preencha todos os campos');
      return;
    }
    const response = await register(email, password, name);
    if (response.success) {
      navigation.navigate('User');
    } else {
      setError(response.error);
    }
  };


  return (
    <View style={styles.container}>
      <NavBar />
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>Registro</Text>

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TextInput style={styles.input} placeholder="Nome completo" placeholderTextColor="#666" value={name} onChangeText={setName}/>

        <TextInput style={styles.input} placeholder="Email" placeholderTextColor="#666" value={email} onChangeText={setEmail} keyboardType="email-address" autoCapitalize="none" />

        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#666" secureTextEntry value={password} onChangeText={setPassword} />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>Registrar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.linkContainer} onPress={() => navigation.navigate('Login')} >
          <Text style={styles.linkText}>Já tem conta? Faça login</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
