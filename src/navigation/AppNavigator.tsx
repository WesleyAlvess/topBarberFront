import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import PerfilScreen from '../screens/LoginScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={PerfilScreen} />
      <Stack.Screen name="Login" component={LoginScreen} />
    </Stack.Navigator>
  );
}
