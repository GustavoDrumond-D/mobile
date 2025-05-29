import React, { useEffect, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native';
import { auth } from '../../../firebaseConfig';
import NavBar from '../../components/NavBar/NavBar';
import styles from './styles';

export default function UserPage({ navigation }) {
  const [user, setUser] = useState(null);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUser(user);
      if (!user) navigation.navigate('Login');
    });
    return unsubscribe;
  }, []);


  const handleLogout = () => {
    auth.signOut().then(() => navigation.navigate('Home'));
  };

  
  return (
    <View style={styles.container}>
      <NavBar />
      <ScrollView contentContainerStyle={styles.content}>
        {user ? (
          <>
            <Image 
              source={{ uri: user.photoURL || 'https://via.placeholder.com/150' }} 
              style={styles.profileImage}
            />
            <Text style={styles.userName}>{user.displayName || 'Usuário'}</Text>
            <Text style={styles.userEmail}>{user.email}</Text>
            
            <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Favorites')}>
              <Text style={styles.buttonText}>Meus Favoritos</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.editButton} onPress={() => navigation.navigate('EditProfile')}>
              <Text style={styles.editButtonText}>Editar Perfil</Text>
            </TouchableOpacity>
            
            <TouchableOpacity style={styles.logoutButton} onPress={handleLogout}>
              <Text style={styles.logoutText}>Sair</Text>
            </TouchableOpacity>
          </>
        ) : (
          <Text style={styles.loadingText}>Carregando...</Text>
        )}
      </ScrollView>
    </View>
  );
}