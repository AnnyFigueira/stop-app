import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { ocean } from "./src/themes";

const StyledView = styled(View)`
  background-color: ${props => props.theme.colors.background};
`;

const PrimaryText = styled(Text)`
  color: ${props => props.theme.colors.primary};
`;

const SecondaryText = styled(Text)`
  color: ${props => props.theme.colors.secondary};
`;

const ButtonsContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
  margin: auto;
`

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

export default function App() {
  const [theme, setTheme] = useState(ocean);
  return (
    <ThemeProvider theme={theme}>
      <StyledView style={styles.container}>
        {/* <PrimaryText>Open up App.js to start working on your app!</PrimaryText>
        <SecondaryText>
          Open up App.js to start working on your app!
        </SecondaryText> */}
        <ButtonsContainer>
          <ButtonContainer>
            <ButtonText>Player VS IA</ButtonText>
          </ButtonContainer>
          <ButtonContainer>
            <ButtonText>Player VS Player</ButtonText>
          </ButtonContainer>
          <ButtonContainer>
            <ButtonText>Player VS Player (Live)</ButtonText>
          </ButtonContainer>
        </ButtonsContainer>
      </StyledView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1,
  },
});
