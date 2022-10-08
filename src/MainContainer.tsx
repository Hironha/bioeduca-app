import { StatusBar } from "expo-status-bar";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import styled from "styled-components/native";
import { Text } from "react-native";

import { ThemeProvider } from "@providers/ThemeProvider";
import { Typography } from "@atoms/Typography";

const queryClient = new QueryClient();

const Container = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`;

export const MainContainer = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <Container>
          <Text>Teste 123</Text>
          <Typography color="warning" bold italic>Teste 111</Typography>
          <StatusBar style="auto" />
        </Container>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
