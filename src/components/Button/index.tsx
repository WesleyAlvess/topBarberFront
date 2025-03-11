import styled from "styled-components";
import { Button } from "react-native";

export const ButtonBrown = styled(Button)`
  background-color: #80382b;
  padding: 15px;
  width: 250px;
  margin-bottom: 15px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  transition: background-color 0.3s ease, transform 0.2s ease;

  &:hover {
    background-color: #8f493d;
  }
`;
