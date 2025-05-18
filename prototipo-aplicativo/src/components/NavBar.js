import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, StyleSheet } from 'react-native';

export default function NavBar() {
  const [menuVisible, setMenuVisible] = useState(false);
  const [userVisible, setUserVisible] = useState(false);

  return (
    <View style={styles.titleContainer}>
      <Text style={styles.title}>I♡Movies</Text>

      <View style={styles.iconContainer}>
        <TouchableOpacity onPress={() => setUserVisible(true)}>
          <Text style={styles.userIcon}>👤</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setMenuVisible(true)}>
          <Text style={styles.searchIcon}>≣</Text>
        </TouchableOpacity>
      </View>

      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.overlay}>
          <View style={styles.menu}>
            <Text style={styles.menuTitle}>Menu</Text>
            <TouchableOpacity><Text style={styles.menuItem}>🔍 Pesquisar</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.menuItem}>🎬 Filtros</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.menuItem}>📺 Filmes e Séries</Text></TouchableOpacity>
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
            <TouchableOpacity><Text style={styles.menuItem}>🔐 Login</Text></TouchableOpacity>
            <TouchableOpacity><Text style={styles.menuItem}>📝 Registrar</Text></TouchableOpacity>
            <TouchableOpacity onPress={() => setUserVisible(false)} style={styles.closeButton}>
              <Text style={styles.closeText}>Fechar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    backgroundColor: '#000',
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#FFD700',
    fontSize: 30,
    fontFamily: 'Inter-Bold',
  },
  iconContainer: {
    flexDirection: 'row',
    gap: 10,
  },
  userIcon: {
    color: '#FFD700',
    fontSize: 30,
    marginRight: 10,
  },
  searchIcon: {
    color: '#FFD700',
    fontSize: 30,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.7)',
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
  },
  menu: {
    width: '70%',
    backgroundColor: '#1a1a1a',
    height: '100%',
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  menuTitle: {
    color: '#FFD700',
    fontSize: 24,
    marginBottom: 20,
    fontWeight: 'bold',
  },
  menuItem: {
    color: '#fff',
    fontSize: 18,
    marginVertical: 10,
  },
  closeButton: {
    marginTop: 30,
    padding: 10,
    backgroundColor: '#FFD700',
    borderRadius: 5,
    alignItems: 'center',
  },
  closeText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
