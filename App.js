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

const ButtonContainer = styled.TouchableOpacity`
  min-width: 100px;
  padding: 16px;
  border-radius: 16px;
  background-color: ${props => props.theme.colors.primary};
`;

const ButtonText = styled.Text`
  font-size: 15px;
  color: ${props => props.theme.colors.background};
  text-align: center;
`;

export default function App() {
  const [theme, setTheme] = useState(ocean);
  return (
    <ThemeProvider theme={theme}>
      <StyledView style={styles.container}>
        <PrimaryText>Open up App.js to start working on your app!</PrimaryText>
        <SecondaryText>
          Open up App.js to start working on your app!
        </SecondaryText>
        <ButtonContainer>
          <ButtonText>Press me</ButtonText>
        </ButtonContainer>
      </StyledView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
