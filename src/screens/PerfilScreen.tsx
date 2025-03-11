import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import styled from "styled-components/native";

const ProfileScreen: React.FC = () => {
  const [userData, setUserData] = useState({
    nome: "Wesley Alves Pereira",
    email: "walvespereira96@gmail.com",
    telefone: "19984246161",
    foto: "https://avatars.githubusercontent.com/u/110751484?v=4",
    tipo: "user",
  });

  return (
    <Container>
      {/* Foto de Perfil */}
      <ContainerPerfil>
        <TextTitulo>Perfil</TextTitulo>
        <ProfileImage source={{ uri: userData.foto }} />

        {/* Dados Pessoais */}
        <UserInfo>
          <TextInfo>Olá {userData.nome}</TextInfo>
          <TextInfo>Email: {userData.email}</TextInfo>
          <TextInfo>Telefone: {userData.telefone}</TextInfo>
        </UserInfo>
      </ContainerPerfil>

      {/* Tipo de Usuário */}
      <ProfileType>
        <Text>{`Perfil: ${userData.tipo}`}</Text>
      </ProfileType>

      {/* Botões de Navegação */}
      <ButtonWrapper>
        <ActionButton onPress={() => console.log("Procurar Salão")}>
          <ButtonText>Procurar Salão</ButtonText>
        </ActionButton>

        {userData.tipo === "comum" && (
          <ActionButton onPress={() => console.log("Criar Salão")}>
            <ButtonText>Criar um Salão</ButtonText>
          </ActionButton>
        )}

        <ActionButton onPress={() => console.log("Editar Perfil")}>
          <ButtonText>Editar Perfil</ButtonText>
        </ActionButton>
      </ButtonWrapper>
    </Container>
  );
};

export default ProfileScreen;

// Styled Components

const Container = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #fff;
`;

const TextTitulo = styled(Text)`
  font-size: 22px;
  padding: 10px;
`;

const ContainerPerfil = styled(View)`
  position: absolute;
  top: 0;
  left: 0;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ProfileImage = styled(Image)`
  width: 150px;
  height: 150px;
  border-radius: 90px;
  border: 6px solid #414141;
`;

const UserInfo = styled(View)`
  margin-bottom: 30px;
  align-items: center;
  background-color: #414141;
`;

const TextInfo = styled(Text)`
  width: 300px;
  font-size: 18px;
  background-color: #414141;
  color: #fff;
  padding: 5px;
`;

const ProfileType = styled(View)`
  margin-bottom: 20px;
  align-items: center;
`;

const ButtonWrapper = styled(View)`
  width: 100%;
  align-items: center;
`;

const ActionButton = styled(TouchableOpacity)`
  background-color: #80382b;
  padding: 15px;
  width: 250px;
  margin-bottom: 15px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

const ButtonText = styled(Text)`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;
