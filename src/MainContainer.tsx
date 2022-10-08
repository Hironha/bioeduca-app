import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";

import { ThemeProvider } from "@providers/ThemeProvider";
import { BottomNavigation } from "@navigations/BottomNavigation";

const queryClient = new QueryClient();

export const MainContainer = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        <NavigationContainer>
          <BottomNavigation />
        </NavigationContainer>
      </ThemeProvider>
    </QueryClientProvider>
  );
};
