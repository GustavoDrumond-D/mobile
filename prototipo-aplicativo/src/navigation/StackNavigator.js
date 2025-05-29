import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from '../screens/HomePage/HomePage';
import LoginPage from '../screens/LoginPage/LoginPage';
import RegisterPage from '../screens/RegisterPage/RegisterPage';
import UserPage from '../screens/UserPage/UserPage';
import SearchPage from '../screens/SearchPage/SearchPage';
import FavoritesPage from '../screens/FavoritesPage/FavoritesPage';
import EditProfilePage from '../screens/EditProfilePage/EditProfilePage';

const Stack = createNativeStackNavigator();

export default function StackNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={HomePage} />
      <Stack.Screen name="Login" component={LoginPage} />
      <Stack.Screen name="Register" component={RegisterPage} />
      <Stack.Screen name="User" component={UserPage} />
      <Stack.Screen name="Search" component={SearchPage} />
      <Stack.Screen name="Favorites" component={FavoritesPage} />
      <Stack.Screen name="EditProfile" component={EditProfilePage} />
    </Stack.Navigator>
  );
}