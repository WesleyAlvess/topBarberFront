import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

interface CreateAccountProps {
  navigation: any;
}

const Cadastro: React.FC<CreateAccountProps> = ({ navigation }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      console.log('As senhas não coincidem!');
      return;
    }
    console.log('Cadastro realizado com sucesso');
    navigation.navigate('Home');
  };

  return (
    <Container>
      {/* Botão de Voltar */}
      <BackButton onPress={() => navigation.goBack()}>
        <Icon name="arrow-left" size={24} color="#fff" />
      </BackButton>
      {/* Logo */}
      <LogoWrapper>
        <LogoImage source={require('../../src/assets/topBarber.png')} />
      </LogoWrapper>

      {/* Título */}
      <Title>Crie sua conta</Title>

      <InputWrapper>
        <Input placeholder="Nome" value={name} onChangeText={setName} />
        <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />

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

        {/* Botão de Criar Conta */}
        <SignUpButton onPress={handleSignUp}>
          <ButtonText>Criar Conta</ButtonText>
        </SignUpButton>

        {/* Já tem uma conta? Faça login */}
        <LoginRedirect onPress={() => navigation.navigate('Login')}>
          <LoginText>Já tem uma conta? Faça login</LoginText>
        </LoginRedirect>
      </InputWrapper>
    </Container>
  );
};

export default Cadastro;

/* 🎨 Estilização */
const Container = styled(View)`
  flex: 1;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
`;

const BackButton = styled(TouchableOpacity)`
  position: absolute;
  top: 40px;
  left: 20px;
  z-index: 1;
  background-color: #80382b;
  color: #fff;
  border-radius: 50%;

`;

const LogoWrapper = styled(View)`
  align-items: center;
  margin-bottom: -50px;
`;

const LogoImage = styled(Image)`
  width: 300px;
  height: 300px;
`;

const Title = styled(Text)`
  font-size: 24px;
  color: #414141;
  margin-bottom: -100px;
`;

const InputWrapper = styled(View)`
  flex: 1;
  width: 100%;
  max-width: 350px;
  justify-content: center;
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
  margin-bottom: 20px;
`;

const PasswordInput = styled(TextInput)`
  flex: 1;
  height: 100%;
`;

const EyeButton = styled(TouchableOpacity)`
  padding: 10px;
`;

const SignUpButton = styled(TouchableOpacity)`
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

const LoginRedirect = styled(TouchableOpacity)`
  align-self: center;
  margin-top: 15px;
`;

const LoginText = styled(Text)`
  color: #80382b;
  font-size: 14px;
`;

