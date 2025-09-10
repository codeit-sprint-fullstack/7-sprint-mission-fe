import { useQuery } from "@tanstack/react-query";

export interface UserInfo {
  name: string;
  img: string;
  email?: string;
  id?: string;
}

export const fetchUserInfo = async (): Promise<UserInfo> => {
  const token = localStorage.getItem("token");
  if (!token) throw new Error("로그인 필요");

  const res = await fetch("http://localhost:4000/users/me", {
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
  });

  if (!res.ok) throw new Error("사용자 정보 조회 실패");
  return res.json();
};
