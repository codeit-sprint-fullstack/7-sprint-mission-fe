interface LoginData {
  email: string;
  password: string;
}
interface User {
  id: string;
  email: string;
  token: string;
}

export const login = async ({ email, password }: LoginData): Promise<User> => {
  const res = await fetch("http://localhost:4000/users/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) throw new Error("로그인 실패");

  return res.json() as Promise<User>;
};

export const fetchUserInfo = async () => {
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
