import React, { useState } from 'react';
import { 
  View, 
  TouchableOpacity, 
  Text, 
  StyleSheet, 
  Animated, 
  ScrollView,
  Dimensions,
  Switch
} from 'react-native';

const NavBar = () => {
  const [showCategories, setShowCategories] = useState(false);
  const [showMoreOptions, setShowMoreOptions] = useState(false);
  const [modoNoturno, setModoNoturno] = useState(false);
  const [notificacoes, setNotificacoes] = useState(true);
  
  const fadeAnim = useState(new Animated.Value(0))[0];
  const rotateAnim = useState(new Animated.Value(0))[0];
  const moreOptionsAnim = useState(new Animated.Value(0))[0];
  
  const screenHeight = Dimensions.get('window').height;
  const categories = [
    "Comedy", "Fantasy", "Crime", "Drama", "Music",
    "Adventure", "History", "Thriller", "Animation", "Family",
    "Mystery", "Biography", "Action", "Film-Noir", "Romance",
    "Sci-Fi", "War", "Western", "Horror", "Musical", "Sport"
  ];

  const toggleCategories = () => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: showCategories ? 0 : 1,
        duration: 200,
        useNativeDriver: true,
      }),
      Animated.timing(rotateAnim, {
        toValue: showCategories ? 0 : 1,
        duration: 200,
        useNativeDriver: true,
      })
    ]).start();
    setShowCategories(!showCategories);
    setShowMoreOptions(false);
  };

  const toggleMoreOptions = () => {
    Animated.timing(moreOptionsAnim, {
      toValue: showMoreOptions ? 0 : 1,
      duration: 200,
      useNativeDriver: true,
    }).start();
    setShowMoreOptions(!showMoreOptions);
    setShowCategories(false);
  };

  const rotateInterpolation = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg']
  });

  return (
    <View style={styles.navContainer}>
      {/* Barra Principal */}
      <View style={styles.mainBar}>
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Início</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={toggleCategories}
        >
          <View style={styles.categoryButton}>
            <Text style={styles.navText}>Categorias</Text>
            <Animated.Text style={[styles.arrow, { transform: [{ rotate: rotateInterpolation }]}]}>
              ▼
            </Animated.Text>
          </View>
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.navButton}>
          <Text style={styles.navText}>Novidades</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.navButton}
          onPress={toggleMoreOptions}
        >
          <Text style={styles.navText}>Mais...</Text>
        </TouchableOpacity>
      </View>

      {/* Dropdown de Categorias */}
      <Animated.View 
        style={[
          styles.dropdown,
          { 
            opacity: fadeAnim,
            height: fadeAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, screenHeight * 0.4]
            }),
          }
        ]}
      >
        <ScrollView 
          style={styles.dropdownScroll}
          nestedScrollEnabled={true}
        >
          {categories.map((category, index) => (
            <TouchableOpacity 
              key={index} 
              style={styles.categoryItem}
              onPress={() => setShowCategories(false)}
            >
              <Text style={styles.categoryText}>{category}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </Animated.View>
      
      {/* Dropdown de Mais Opções */}
      <Animated.View 
        style={[
          styles.moreOptionsDropdown,
          { 
            opacity: moreOptionsAnim,
            height: moreOptionsAnim.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 120]
            }),
          }
        ]}
      >
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Modo Noturno</Text>
          <Switch
            value={modoNoturno}
            onValueChange={setModoNoturno}
            trackColor={{ false: '#767577', true: '#FFD700' }}
            thumbColor={modoNoturno ? '#000' : '#f4f3f4'}
          />
        </View>
        
        <View style={styles.switchContainer}>
          <Text style={styles.switchLabel}>Notificações</Text>
          <Switch
            value={notificacoes}
            onValueChange={setNotificacoes}
            trackColor={{ false: '#767577', true: '#FFD700' }}
            thumbColor={notificacoes ? '#000' : '#f4f3f4'}
          />
        </View>
        
        <TouchableOpacity style={styles.loginButton}>
          <Text style={styles.loginButtonText}>Acessar Perfil</Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  navContainer: {
    zIndex: 100,
    marginBottom: 5,
  },
  mainBar: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: '#FFD700',
    borderRadius: 8,
    marginHorizontal: 10,
    overflow: 'hidden',
  },
  navButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: 70, // Largura mínima para evitar esmagamento
  },
  navText: {
    color: '#000',
    fontWeight: 'bold',
    fontSize: 14, // Reduzido para caber mais itens
  },
  categoryButton: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  arrow: {
    marginLeft: 5,
    fontSize: 12,
    color: '#000',
  },
  dropdown: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 5,
    overflow: 'hidden',
  },
  moreOptionsDropdown: {
    backgroundColor: '#1a1a1a',
    borderRadius: 8,
    marginHorizontal: 10,
    marginTop: 5,
    overflow: 'hidden',
  },
  dropdownScroll: {
    flex: 1,
  },
  categoryItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  categoryText: {
    color: '#FFF',
    textAlign: 'center',
    fontSize: 16,
  },
  switchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  switchLabel: {
    color: '#FFF',
    fontSize: 14,
  },
  loginButton: {
    padding: 15,
    alignItems: 'center',
    backgroundColor: '#333',
  },
  loginButtonText: {
    color: '#FFD700',
    fontWeight: 'bold',
  },
});

export default NavBar;