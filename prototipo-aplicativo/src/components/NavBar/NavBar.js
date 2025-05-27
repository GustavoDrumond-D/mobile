import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../services/firebase';
import styles from './styles';

export default function NavBar() {
  const navigation = useNavigation();
  const [menuVisible, setMenuVisible] = useState(false);
  const [userVisible, setUserVisible] = useState(false);
  const [userLoggedIn, setUserLoggedIn] = useState(false);


  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(user => {
      setUserLoggedIn(!!user);
    });
    return unsubscribe;
  }, []);


  const handleUserAction = () => {
    setUserVisible(false);
    if (userLoggedIn) {
      navigation.navigate('User');
    } else {
      navigation.navigate('Login');
    }
  };

  
  return (
    <View style={styles.titleContainer}>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text style={styles.title}>I♡Movies</Text>
      </TouchableOpacity>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => setUserVisible(true)}>
          <Text style={styles.userIcon}>👤</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Text style={styles.searchIcon}>≣</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={menuVisible} transparent={true} animationType="slide" onRequestClose={() => setMenuVisible(false)}>
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <Text style={styles.menuTitle}>Menu</Text>

            <TouchableOpacity onPress={() => {
              setMenuVisible(false); 
              navigation.navigate('Search')}}>
              <Text style={styles.menuItem}>🔍 Pesquisar</Text>
            </TouchableOpacity>

            <TouchableOpacity>
              <Text style={styles.menuItem}>🎬 Filtros</Text>
            </TouchableOpacity>
            
            <TouchableOpacity>
              <Text style={styles.menuItem}>📺 Filmes e Séries</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => setMenuVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal
        visible={userVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setUserVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <Text style={styles.menuTitle}>Conta</Text>
            
            {userLoggedIn ? (
              <TouchableOpacity onPress={handleUserAction}>
                <Text style={styles.menuItem}>👤 Minha Conta</Text>
              </TouchableOpacity>
            ) : (
              <>
                <TouchableOpacity onPress={() => {
                  setUserVisible(false);
                  navigation.navigate('Login');
                }}>
                  <Text style={styles.menuItem}>🔐 Login</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => {
                  setUserVisible(false);
                  navigation.navigate('Register');
                }}>
                  <Text style={styles.menuItem}>📝 Registrar</Text>
                </TouchableOpacity>
              </>
            )}

            {userLoggedIn && (
              <TouchableOpacity onPress={() => {
                setUserVisible(false);
                auth.signOut();
              }}>
                <Text style={styles.menuItem}>🚪 Sair</Text>
              </TouchableOpacity>
            )}

            <TouchableOpacity onPress={() => setUserVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}