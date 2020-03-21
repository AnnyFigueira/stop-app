import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import styled, { ThemeProvider } from "styled-components/native";
import { ocean } from "./src/themes";
import Button from "./src/components/Button";

const StyledView = styled(View)`
  background-color: ${props => props.theme.colors.background};
`;

const ButtonsContainer = styled.View`
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 60vh;
  margin: auto;
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
          <Button>Player VS IA</Button>
          <Button>Player VS Player</Button>
          <Button>Player VS Player (Live)</Button>
        </ButtonsContainer>
      </StyledView>
    </ThemeProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flex: 1
  }
});
