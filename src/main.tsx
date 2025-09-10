import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import Nav from "./components/nav/nav.tsx";
import Footer from "./components/footer/footer.tsx";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <BrowserRouter>
        <Nav />
        <App />
        {process.env.NODE_ENV === "development" && (
          <ReactQueryDevtools initialIsOpen={false} />
        )}
        <Footer />
      </BrowserRouter>
    </QueryClientProvider>
  </StrictMode>
);
