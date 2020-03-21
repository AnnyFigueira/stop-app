import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components/native";

const ButtonsContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
  margin: auto;
`;

const ButtonContainer = styled.TouchableOpacity`
  min-width: 70vw;
  padding: 16px;
  border-radius: 4px;
  background-color: ${props => props.theme.colors.primary};
  /* margin-bottom: 2vh; */
`;

const ButtonText = styled.Text`
  font-size: 15pt;
  color: ${props => props.theme.colors.background};
  text-align: center;
`;

export default function Button({ children }) {
  return (
    <ButtonContainer>
      <ButtonText>{children}</ButtonText>
    </ButtonContainer>
  );
}
