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

export function signInPath() {
  return `${API_BASE_URL}/auth/signIn`;
}
