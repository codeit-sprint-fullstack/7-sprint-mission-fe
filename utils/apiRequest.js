// utils/apiRequest.js

import {
  signInPath,
  postArticlePath,
  getUserMePath,
  logoutPath,
  toggleCommentLikePath,
  toggleArticleLikePath,
} from "@/constants/apiPath";

export async function postJson(url, body) {
  const res = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
    credentials: "include",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`POST 요청 실패: ${res.status} ${errorText}`);
  }

  return res.json(); // 응답을 바로 파싱해서 반환
}

export async function postSignIn({ email, password }) {
  const res = await fetch(signInPath(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("로그인에 실패했습니다.");
  }

  return res.json(); // { user, accessToken, refreshToken }
}

//게시글 작성
export async function postArticle({ title, content, userId }) {
  return await postJson(postArticlePath(), { title, content, userId });
}

//유저정보 불러오기
export async function fetchCurrentUser() {
  const res = await fetch(getUserMePath(), {
    credentials: "include",
  });

  if (!res.ok) {
    throw new Error("사용자 정보를 불러오는 데 실패했습니다.");
  }

  return res.json(); // { user }
}

//로그아웃
export async function postLogout() {
  const res = await fetch(logoutPath(), {
    method: "POST",
    credentials: "include",
  });

  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(`로그아웃 실패: ${res.status} ${errorText}`);
  }

  return true; // 성공 시 true 반환
}

export async function postToggleCommentLike(articleId, commentId) {
  return await postJson(toggleCommentLikePath(articleId, commentId), {});
}

export async function postToggleArticleLike(articleId) {
  return await postJson(toggleArticleLikePath(articleId), {});
}