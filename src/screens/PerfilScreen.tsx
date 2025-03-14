import React, { useEffect, useState } from "react";
import { View, Text, Image, TouchableOpacity, ActivityIndicator, Button, Pressable } from "react-native";
import styled from "styled-components/native";
import { getPerfil } from "../functions/getPerfil";
import Icon from 'react-native-vector-icons/Feather'; // Importando a biblioteca de ícones


const ProfileScreen: React.FC = () => {
  const [userData, setUserData] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const buscaUserData = async () => {
      const data = await getPerfil() // Busca dados do perfil
      if (data) setUserData(data) // Atualiza o estado se os dados existirem
      console.log("Dados do perfil recebidos:", data);

      setUserData(data); // Atualiza o estado com os dados recebidos
      setLoading(false) // Marca o fim do carregamento
    };
    buscaUserData() // Chama a função quando a tela for renderizada
  }, []);

  if (loading) {
    return (
      <Container>
        <ActivityIndicator size="large" color="#737373" />
      </Container>
    )
  }


  return (
    <Container>
      {userData ? (
        <ContainerBox>
          {/* Logo */}
          <ContainerLogo>
            <LogoImage source={require('../../src/assets/topBarber.png')} />
          </ContainerLogo>
          <ContainerPerfil>
            <ProfileImage source={require('../../src/assets/picofme.png')} />
            <ContainerText>
              <TextName>{userData.nome}</TextName>
              <TextTipo>Seu perfil é {userData.tipo}</TextTipo>
              <TextFone>
                <Icon name="phone" size={14} color="gary" /> {/* Ícone de telefone */}
                {userData.telefone}
              </TextFone>
              <TextStatus><StatusText>Status: </StatusText>{userData.status}</TextStatus>
            </ContainerText>
          </ContainerPerfil>
          <ContainerOptions>
            <Card onPress={() => alert("Agendar Serviço")}>
              <IconeCard name="calendar" />
              <TextCard>Agendar Serviço</TextCard>
            </Card>
            <Card onPress={() => alert("Criar um Salão")}>
              <IconeCard name="scissors" />
              <TextCard>Criar um Salão</TextCard>
            </Card>
            {/* <Card onPress={() => alert("Editar Perfil")}>
              <IconeCard name="user" />
              <TextCard>Editar Perfil</TextCard>
            </Card> */}
          </ContainerOptions>
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
  background-color: #fff;
`;

const ContainerBox = styled(View)`
  flex: 1;
  align-items: center;
  gap: 80px;
`;

const ContainerLogo = styled(View)`
  width: 100%;
  height: 150px;
  align-items: center;
  justify-content: center;
`;
const LogoImage = styled(Image)`
  width: 200px;
  height: 200px;
`;

const ContainerPerfil = styled(View)`
  background-color: #80382b;
  padding: 15px;
  width: 100%;
  height: 180px;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  gap: 22px;
  margin-top: -80px;
`;

const ProfileImage = styled(Image)`
  width: 100px;
  height: 100px;
  border: 2px solid #fff;
  border-radius: 90px;
`;

const ContainerText = styled(View)`
  flex-direction: column;
  margin-right: 10px;
`;


const TextName = styled(Text)`
  font-size: 22px;
  color: #fff;
  font-weight: bold;
`;

const TextTipo = styled(Text)`
  font-style: italic;
  font-size: 16px;
  color: #fff;
`;

const TextFone = styled(Text)`  
  font-style: italic;
  font-size: 16px;
  color: #fff;
  `;

const StatusText = styled(Text)`
  font-size: 16px;
  color: #fff;
`

const TextStatus = styled(Text)`
font-size: 16px;
  font-style: italic;
  color: #009d00;
  `


const ContainerOptions = styled(View)`
  width: 90%;
  flex-direction: row;
  align-items: center;
  flex-direction: column;
  /* flex-wrap: wrap; */
  justify-content: center;
  gap: 20px;
  padding: 10px;
  `;

const IconeCard = styled(Icon)`
  font-size: 50px;
  color: #fff;
  margin-bottom: 5px;
  `;

const TextCard = styled(Text)`
  font-size: 20px;
  font-weight: bold;
  color: #fff;
  text-align: center;
  `;

const Card = styled.Pressable`
  width: 350px;
  height: 120px;
  background-color: #80382b;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  `;

