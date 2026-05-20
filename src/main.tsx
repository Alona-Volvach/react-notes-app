import { createRoot } from "react-dom/client";
import "modern-normalize";
import App from "./components/App/App";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

createRoot(document.getElementById("root") as HTMLDivElement).render(
  <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
);
