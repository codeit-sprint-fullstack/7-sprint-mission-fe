import { createContext, useContext, useState } from "react";

export const UserContext = createContext();

// 로그인 기능은 없으나 일단 당장 yewon 상태인 것으로 두고 함..

export function UserProvider({ children }) {
  const [userId, setUserId] = useState("124803f0-7e00-4529-9cb2-305a56c48d78");

  return (
    <UserContext.Provider value={{ userId, setUserId }}>
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  const userContext = useContext(UserContext);

  if (!userContext) {
    throw new Error("UserContext 안에서 써야 합니다");
  }

  return userContext;
}
