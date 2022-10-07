import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { MainContainer } from "./src/MainContainer";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <MainContainer />
    </QueryClientProvider>
  );
}
