import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/HomePage/HomePage.js';
import LoginPage from './src/pages/LoginPage/LoginPage.js';
import RegisterPage from './src/pages/RegisterPage/RegisterPage.js';
import UserPage from './src/pages/UserPage/UserPage.js';
import SearchPage from './src/pages/SearchPage/SearchPage.js';
import FavoritesPage from './src/pages/FavoritesPage/FavoritesPage.js';
import EditProfilePage from './src/pages/EditProfilePage/EditProfilePage.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="User" component={UserPage} />
        <Stack.Screen name="Search" component={SearchPage} />
        <Stack.Screen name="Favorites" component={FavoritesPage} />
        <Stack.Screen name="EditProfile" component={EditProfilePage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
