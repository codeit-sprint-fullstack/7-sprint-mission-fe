// utils/apiRequest.js

import { signInPath } from "@/constants/apiPath";

export async function postJson(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`POST 요청 실패: ${res.status} ${errorText}`);
  }

  return res.json(); // 응답을 바로 파싱해서 반환
}

export async function signIn({ email, password }) {
  const res = await fetch(signInPath(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });

  if (!res.ok) {
    throw new Error("로그인에 실패했습니다.");
  }

  return res.json(); // { user, accessToken, refreshToken }
}