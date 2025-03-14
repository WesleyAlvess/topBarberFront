import React, { useState } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { createNewUser } from '../functions/createNewUser';

interface CreateAccountProps {
  navigation: any;
}

const Cadastro: React.FC<CreateAccountProps> = ({ navigation }) => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [senha, setSenha] = useState<string>('');
  const [telefone, setTelefone] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [userData, setUserData] = useState<any>(null) // Armazenando dados do novo usuário

  const handleSignUp = async () => {
    setLoading(true);
    try {
      const data = await createNewUser(name, email, senha, telefone);

      // Atualize o estado do usuário (se necessário)
      setUserData(data);

      // Use os dados diretamente sem depender de userData
      if (data && data._id) {
        navigation.navigate("Perfil", { data }); // Redireciona o usuário com os dados
      } else {
        alert("Erro ao criar conta. Tente novamente.");
      }
    } catch (error: any) {
      console.error("Erro na criação do usuário:", error);
      alert("Erro ao criar conta. Verifique seus dados e tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container>
      {/* Logo */}
      <LogoWrapper>
        <LogoImage source={require('../../src/assets/topBarber.png')} />
      </LogoWrapper>

      {/* Título */}
      <Title>Crie sua conta</Title>

      <InputWrapper>
        <Input placeholder="Nome" value={name} onChangeText={setName} />
        <Input placeholder="Email" value={email} onChangeText={setEmail} keyboardType="email-address" />
        <Input placeholder="Telefone" value={telefone} onChangeText={setTelefone} />

        <PasswordContainer>
          <PasswordInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
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

