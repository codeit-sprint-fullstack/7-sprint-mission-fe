import { useQuery } from "@tanstack/react-query";

export interface UserInfo {
  name: string;
  img: string;
  email?: string;
  id?: string;
}

export interface UserRegister {
  email: string;
  name: string;
  password: string;
  img?: string;
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

export const signUpUser = async (data: UserRegister) => {
  const res = await fetch(`http://localhost:4000/users/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!res.ok) throw new Error("회원가입 실패");
  return res.json();
};
