import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './src/pages/HomePage/HomePage.js';
import LoginPage from './src/pages/LoginPage/LoginPage.js';
import RegisterPage from './src/pages/RegisterPage/RegisterPage.js';
import UserPage from './src/pages/UserPage/UserPage.js';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomePage} />
        <Stack.Screen name="Login" component={LoginPage} />
        <Stack.Screen name="Register" component={RegisterPage} />
        <Stack.Screen name="User" component={UserPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
