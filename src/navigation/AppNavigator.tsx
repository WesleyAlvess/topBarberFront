import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CadastroScreen from '../screens/CadastroScreen';
import LoginScreen from '../screens/LoginScreen';
import PerfilScreen from '../screens/PerfilScreen';

const Stack = createNativeStackNavigator();

function AppNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Cadastro" component={CadastroScreen} />
      <Stack.Screen name='Perfil' component={PerfilScreen} />
    </Stack.Navigator>
  );
}

export default AppNavigator;
