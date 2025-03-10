import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    console.log('Login realizado com sucesso');
    navigation.navigate('Home');
  };

  const handleCreateAccount = () => {
    console.log('Criar conta');
    navigation.navigate('CreateAccount'); // Substitua com a rota de criação de conta
  };

  return (
    <Container>
      {/* Logo */}
      <LogoWrapper>
        <LogoImage source={require('../../src/assets/topBarber.png')} />
      </LogoWrapper>

      {/* Navegação de Login e Cadastro */}
      <NavWrapper>
        <NavButton onPress={handleLogin}>
          <NavText>Entrar</NavText>
        </NavButton>
        <NavButton onPress={handleCreateAccount}>
          <NavText>Criar Conta</NavText>
        </NavButton>
      </NavWrapper>

      {/* Titulo */}
      <Title>Bem-vindo!</Title>

      {/* Inputs */}
      <InputWrapper>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />

        <PasswordContainer>
          <PasswordInput
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry={!showPassword}
          />
          <EyeButton onPress={() => setShowPassword(!showPassword)}>
            <Icon name={showPassword ? 'eye' : 'eye-off'} size={20} color="#797979" />
          </EyeButton>
        </PasswordContainer>

        {/* Esqueceu a senha */}
        <ForgotPassword onPress={() => navigation.navigate('ForgotPassword')}>
          <ForgotText>Esqueceu sua senha?</ForgotText>
        </ForgotPassword>

        {/* Botão de Login */}
        <LoginButton onPress={handleLogin}>
          <ButtonText>Entrar</ButtonText>
        </LoginButton>

      </InputWrapper>
    </Container>
  );
};

export default Login;

const Container = styled(View)`
  flex: 1;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
`;

const LogoWrapper = styled(View)`
  align-items: center;
`;

const LogoImage = styled(Image)`
  width: 500px;
  height: 150px;
`;

const Title = styled(Text)`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 30px;
  color: #414141;
`;

const NavWrapper = styled(View)`
  background-color: #898970;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 40px;
`;

const NavButton = styled(TouchableOpacity)`
  flex: 1;
  padding: 10px;
  border-radius: 8px;
  margin: 0 5px;
  justify-content: center;
  align-items: center;
`;

const NavText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const InputWrapper = styled(View)`
  flex: 1;
  width: 100%;
  max-width: 350px;
`;

const Input = styled(TextInput)`
  width: 100%;
  height: 45px;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding-left: 10px;
  margin-bottom: 20px;
  background-color: white;
`;

const PasswordContainer = styled(View)`
  width: 100%;
  height: 45px;
  flex-direction: row;
  align-items: center;
  border-width: 1px;
  border-color: #ccc;
  border-radius: 8px;
  padding-left: 10px;
  background-color: white;
`;

const PasswordInput = styled(TextInput)`
  flex: 1;
  height: 100%;
`;

const EyeButton = styled(TouchableOpacity)`
  padding: 10px;
`;

const ForgotPassword = styled(TouchableOpacity)`
  align-self: flex-end;
  margin-bottom: 20px;
`;

const ForgotText = styled(Text)`
  margin-top: 10px;
  color: #80382b;
`;

const LoginButton = styled(TouchableOpacity)`
  background-color: #80382b;
  padding: 15px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  margin-top: 15px;
`;


const ButtonText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
