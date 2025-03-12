import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Button } from "react-native";
import styled from "styled-components/native";
import { getPerfil } from "../functions/getPerfil";
import Icon from 'react-native-vector-icons/FontAwesome'; // Importando a biblioteca de ícones


const ProfileScreen: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscaUserData = async () => {
      const data = await getPerfil() // Busca dados do perfil
      if(data) setUserData(data) // Atualiza o estado se os dados existirem
      setLoading(false) // Marca o fim do carregamento
    };
    buscaUserData() // Chama a função quando a tela for renderizada
  }, []);

  if(loading) {
    <Container>
      <ActivityIndicator size="large" color="#737373" />
    </Container>
  }


  return (
    <Container>
      {userData ? (
        <ContainerBox>
          <ContainerPerfil>
            <ProfileImage source={ require('../../src/assets/picofme.png') } />
            <ContainerText>
              <TextName>{userData.nome}</TextName>
              <TextTipo>Seu perfil é {userData.tipo}</TextTipo>
                <TextFone>
                  <Icon name="phone" size={14} color="gary" /> {/* Ícone de telefone */}
                  {userData.telefone}
                </TextFone>
            </ContainerText>
          </ContainerPerfil>
          <ContainerBotoes>
            <TextButton>Enviar</TextButton>
          </ContainerBotoes>
        </ContainerBox>
      ) : (
        <Text>Erro ao carregar perfil</Text>
      )}
    </Container>
  );
};

export default ProfileScreen;

// Styled Components

const Container = styled(View)`
  flex: 1;
  align-items: center;
  background-color: #fff;
`;

const ContainerBox = styled(View)`
  justify-content: center;
`;

const ContainerPerfil = styled(View)`
  padding: 15px;
  width: 100%;
  height: 180px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 22px;
`;

const ProfileImage = styled(Image)`
  width: 100px;
  height: 100px;
`;

const ContainerText = styled(View)`
  flex-direction: column;
  justify-content: center;
  margin-right: 10px;
`;

const TextName = styled(Text)`
  font-size: 22px;
`;

const TextTipo = styled(Text)`
  font-style: italic;
  color: gray;
`;

const TextFone = styled(Text)`  
  font-style: italic;
  color: gray;
  `;


const ContainerBotoes = styled(TouchableOpacity)`
  background-color: #80382b;
  padding: 15px;
  width: 200px;
  margin-bottom: 15px;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.2s ease;
  `;

const TextButton = styled(Text)`
  color: #fff;
  font-weight: bold;
  font-size: 18px;
`




// walvespereira96@gmail.com
