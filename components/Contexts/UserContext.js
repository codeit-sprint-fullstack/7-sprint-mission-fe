"use client";
//components/Contexts/UserContext.js
import { createContext, useContext, useEffect, useState, useMemo } from "react";
import { fetchCurrentUser } from "@/utils/apiRequest";

const UserContext = createContext();

export function UserProvider({ children }) {
  const [user, setUser] = useState(null);
  const [isFetchUserLoading, setIsFetchUserLoading] = useState(true);

  const fetchUser = async () => {
    try {
      setIsFetchUserLoading(true);
      const data = await fetchCurrentUser();
      setUser(data.user);
    } catch (err) {
      console.error("사용자 정보 로딩 실패:", err);
    } finally {
      setIsFetchUserLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);
  const isLoggedIn = useMemo(() => !!user, [user]);

  return (
    <UserContext.Provider
      value={{ user, setUser, fetchUser, isLoggedIn, isFetchUserLoading }}
    >
      {children}
    </UserContext.Provider>
  );
}

export const useUser = () => useContext(UserContext);
