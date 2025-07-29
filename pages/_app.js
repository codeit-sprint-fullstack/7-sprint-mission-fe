import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { UserProvider } from "@/lib/UserContext";
import "@/styles/globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import React from "react";

export default function App({ Component, pageProps }) {
  const useLayout = Component.useLayout ?? true;
  const [queryClient] = React.useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            // 보통 SSR에서는 staleTime을 0 이상으로 해줌으로써
            // 클라이언트 사이드에서 바로 다시 데이터를 refetch 하는 것을 피한다.
            staleTime: 60 * 1000,
          },
        },
      })
  );

  return (
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        {useLayout && <Navbar />}
        <Component {...pageProps} />
        {useLayout && <Footer />}
      </UserProvider>
    </QueryClientProvider>
  );
}
