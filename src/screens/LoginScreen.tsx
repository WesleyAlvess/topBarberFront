import React, { useState } from 'react';
import { View, TextInput, Text, Image } from 'react-native';
import styled from 'styled-components/native';

// Declarando um tipo para as propriedades do componente
interface LoginProps {
  navigation: any; // Tipo para a navegação
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  // Tipando useState com string para as variáveis de email e senha
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  // Função que será chamada quando o botão login for clicado
  const handleLogin = () => {
    console.log('Login realizado com sucesso');
    navigation.navigate('Home'); // Navega para a tela Home após login
  };

  return (
    <Container>
       {/* Imagem em cima da logo */}
      <LogoWrapper>
        <LogoImage source={require('../assets/logo.png')} />
      </LogoWrapper>
      <Input
        placeholder="Email"
        onChangeText={setEmail}
      />

      <Input
        placeholder="Senha"
        secureTextEntry
        onChangeText={setPassword}
      />

      <LoginButton onPress={handleLogin}>
        <ButtonText>Entrar</ButtonText>
      </LoginButton>
    </Container>
  );
};

export default Login;

// Estilos da tela de login
const Container = styled(View)`
  flex: 1;
  justify-content: center;
  padding: 25px;
  background-color: #e4e4e4;
`;

const LogoWrapper = styled(View)`
  align-items: center;
  margin-bottom: 20px;
`;

const LogoImage = styled(Image)`
  width: 100px;  // Defina o tamanho desejado para a logo
  height: 100px; // Defina o tamanho desejado para a logo
  margin-bottom: 15px;  // Distância entre a logo e os inputs
`;

const Input = styled(TextInput)`
  height: 40px;
  border-bottom-width: 1px;
  border-bottom-color: #797979;
  margin-bottom: 12px;
  padding-left: 8px;
`;

const LoginButton = styled.TouchableOpacity`
  background-color: #80382B;
  padding: 10px;
  border-radius: 5px;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
`;

const ButtonText = styled(Text)`
  color: white;
  font-size: 16px;
`;

