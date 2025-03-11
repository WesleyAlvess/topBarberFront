import React, { useState, useEffect } from 'react';
import { View, TextInput, Text, TouchableOpacity, Image, Alert } from 'react-native';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';
import { login } from '../functions/login'

interface LoginProps {
  navigation: any;
}

const Login: React.FC<LoginProps> = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false)
  const [data, setData] = useState<any>([])

  // Função chamada ao clicar no botão de login
  const handleLogin = async () => {
    setLoading(true) // Ativa o carregamento

    // Chama a função login passando email e senha
    const userData = await login(email, senha)

    if(userData) {
      navigation.navigate("Perfil"); // Redireciona o usuário
    } else {
      alert("Email ou senha incorretos") // Exibe mensagem de erro
    }

    setLoading(false); // Desativa o carregamento
    try {
    } catch (error) {
      console.error("Erro ao acessar os dados");
    }
  };
  
  useEffect(() => {
    if(data && data.token) {
      navigation.navigate('Perfil');
    }
    console.log(data);
    
  }, [])


  const handleCreateAccount = () => {
    console.log('Criar conta');
    navigation.navigate('Cadastro');
  }


  return (
    <Container>
      {/* Logo */}
      <LogoWrapper>
        <LogoImage source={require('../../src/assets/topBarber.png')} />
      </LogoWrapper>


      {/* Titulo */}
      <Title>Bem-vindo!</Title>


      {/* Inputs */}
      <InputWrapper>
        <Input placeholder="Email" value={email} onChangeText={setEmail} />

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

        {/* Esqueceu a senha */}
        <ForgotPassword onPress={() => navigation.navigate('ForgotPassword')}>
          <ForgotText>Esqueceu sua senha?</ForgotText>
        </ForgotPassword>

        {/* Botão de Login */}
        <LoginButton onPress={handleLogin}>
          <ButtonText>Entrar</ButtonText>
        </LoginButton>

        {/* Botão de Cadastro */}
        <SignInButton onPress={handleCreateAccount}>
          <ButtonText>Criar conta</ButtonText>
        </SignInButton>

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
  width: 300px;
  height: 300px;
  margin-bottom: -50px;
`;

const Title = styled(Text)`
  font-size: 24px;
  margin-bottom: 50px;
  color: #414141;
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

const SignInButton = styled(TouchableOpacity)`
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
