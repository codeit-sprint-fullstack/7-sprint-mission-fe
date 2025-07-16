import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

export const UrlContext = createContext();

export function UrlProvider({ children }) {
  const [url, setUrl] = useState("/");

  return (
    <UrlContext.Provider value={{ url, setUrl }}>
      {children}
    </UrlContext.Provider>
  );
}

export function useUrl() {
  const urlContext = useContext(UrlContext);

  if (!urlContext) {
    throw new Error("urlContext 안에서 써야 합니다");
  }

  return urlContext;
}

export function setPageUrl() {
  const router = useRouter();
  const { setUrl } = useUrl();
  setUrl(router.pathname);
}
