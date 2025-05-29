import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import { auth } from '../../../firebaseConfig';
import { updateProfile } from 'firebase/auth';
import NavBar from '../../components/NavBar/NavBar';
import styles from './styles';

export default function EditProfilePage({ navigation }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    if (auth.currentUser) {
      setName(auth.currentUser.displayName || '');
      setEmail(auth.currentUser.email || '');
    }
  }, []);


  const handleSave = async () => {
    if (!name.trim()) {
      Alert.alert('Erro', 'O nome não pode estar vazio');
      return;
    }
    setLoading(true);
    try {
      await updateProfile(auth.currentUser, {
        displayName: name
      });
      Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
      navigation.goBack();
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível atualizar o perfil');
      console.error('Update error:', error);
    } finally {
      setLoading(false);
    }
  };


  return (
    <View style={styles.container}>
      <NavBar />
      <View style={styles.content}>
        <Text style={styles.title}>Editar Perfil</Text>
        
        <TextInput style={styles.input} placeholder="Nome" value={name} onChangeText={setName}/>

        <TextInput style={[styles.input, styles.disabledInput]} placeholder="Email" value={email} editable={false}/>

        <TouchableOpacity  style={styles.saveButton}  onPress={handleSave} disabled={loading}>
          <Text style={styles.buttonText}>
            {loading ? 'Salvando...' : 'Salvar Alterações'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}