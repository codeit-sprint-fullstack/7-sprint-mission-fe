// components/LoginForm.js
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function LoginForm({}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const res = await fetch("http://localhost:4000/auth/signIn", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) throw new Error("로그인 실패");

      const data = await res.json();
      const { accessToken, refreshToken, user } = data;

      // 토큰 저장 (로컬스토리지 or 쿠키)
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("user", JSON.stringify(user));
      router.push("/");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>로그인</h2>
      <input
        type="email"
        value={email}
        placeholder="이메일"
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        value={password}
        placeholder="비밀번호"
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <button type="submit">로그인</button>
      {error && <p style={{ color: "red" }}>{error}</p>}
    </form>
  );
}
