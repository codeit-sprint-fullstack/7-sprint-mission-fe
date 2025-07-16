// constants/apiPath.js
import { API_BASE_URL, ORDER_BY, PAGE_SIZE } from "./index";

export function getArticlePath({
  page = 1,
  pageSize = PAGE_SIZE,
  orderBy = ORDER_BY,
} = {}) {
  return `${API_BASE_URL}/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
}

// 댓글 조회용 (GET)
export function getArticleCommentsPath(articleId, limit = 10) {
  return `${API_BASE_URL}/articles/${articleId}/comments?limit=${limit}`;
}

// 댓글 작성용 (POST)
export function postArticleCommentPath(articleId) {
  return `${API_BASE_URL}/articles/${articleId}/comments`;
}

// 로그인 (POST)
export function signInPath() {
  return `${API_BASE_URL}/auth/signIn`;
}

// 게시글 작성 (POST)
export function postArticlePath() {
  return `${API_BASE_URL}/articles`;
}

export function getUserMePath() {
  return `${API_BASE_URL}/auth/me`;
}

export function logoutPath() {
  return `${API_BASE_URL}/auth/logout`;
}
