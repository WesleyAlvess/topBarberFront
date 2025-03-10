import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PerfilScreen from '../screens/PerfilScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Perfil" component={PerfilScreen} />
    </Stack.Navigator>
  );
}
