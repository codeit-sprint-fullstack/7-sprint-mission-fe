import { createContext, useContext, useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import logout from "@/utils/logout";

export const AuthContext = createContext();
export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(null);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const token = localStorage.getItem("accessToken");
    if (!token) {
      console.log("토큰이 없어서, 비로그인으로 로딩을 진행합니다.");
      setLoading(false);
      return;
    }

    async function fetchUserWithRefresh() {
      try {
        // 접속 처음 로그인 시도(accessToken으로)
        console.log("accessToken으로 유저정보를 가져오는 중입니다.");
        const res = await axios.get(
          "https://panda-market-api.vercel.app/users/me",
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setAuth({ user: res.data });
      } catch (err) {
        // 401 응답 도착 = 액세스토큰 만료, -> 리프레쉬 토큰으로 액세스토큰 재발급 시도
        if (err.response?.status === 401) {
          console.log("access token 만료. refresh 시도 중...");

          const refreshToken = localStorage.getItem("refreshToken");

          //리프레쉬 토큰이 없을경우 로그아웃
          if (!refreshToken) {
            console.log("리프레쉬 토큰이 없어 로그아웃을 시도합니다..");
            return logout(setAuth);
          }

          try {
            console.log("refresh 토큰으로 액세스 토큰 발급 요청 중..");
            const refreshRes = await axios.post(
              "https://panda-market-api.vercel.app/auth/refresh-token",
              { refreshToken }
            );

            const newAccessToken = refreshRes.data.accessToken;
            localStorage.setItem("accessToken", newAccessToken);

            // 새 accessToken으로 다시 유저 정보 요청
            const userRes = await axios.get(
              "https://panda-market-api.vercel.app/users/me",
              {
                headers: {
                  Authorization: `Bearer ${newAccessToken}`,
                },
              }
            );

            setAuth({ user: userRes.data });
          } catch (refreshErr) {
            console.error("refresh token도 만료됨. 로그아웃 처리.");
            logout();
          }
        } else {
          console.error("기타 로그인 오류:", err);
        }
      } finally {
        setLoading(false);
      }
    }

    function handleLogout() {
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      setAuth(null);
    }

    fetchUserWithRefresh();
  }, []);
  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {isLoading ? null : children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext 안에서 써야 합니다.");
  }

  return authContext;
}
