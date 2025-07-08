import axios from "axios";
const PRODUCT_URL = "http://localhost:5000";

export async function fetchCommentList() {
  const res = await axios.get(`${PRODUCT_URL}/api/comment/product`);
  const data = res.data;

  return data;
}

export async function fetchUserList() {
  const res = await axios.get(`${PRODUCT_URL}/api/user`);
  const data = res.data;

  return data;
}

export async function postBoard(title, content) {
  const res = await axios.post(`${PRODUCT_URL}/api/articles`, {
    title,
    content,
  });
  const data = res.data;

  return data;
}

export async function getBoardById(id) {
  const res = await axios.get(`${PRODUCT_URL}/api/articles/${id}`);
  const data = res.data;

  return data;
}

export async function getAricleList() {
  const res = await axios.get(`${PRODUCT_URL}/api/articles`);
  const data = res.data;

  return data;
}

export async function postComment({ userId, articleId, content }) {
  const res = await axios.post(`${PRODUCT_URL}/api/comment`, {
    userId,
    articleId,
    content,
  });
  const data = res.data;

  return data;
}

export async function getCommentListByAricleId(articleId) {
  const res = await axios.get(
    `${PRODUCT_URL}/api/comment/article/${articleId}`
  );
  const data = res.data;

  return data;
}

export async function deleteArticle(id) {
  const res = await axios.delete(`${PRODUCT_URL}/api/articles/${id}`);
  const data = res.data;

  return data;
}

export async function deleteComment(id) {
  console.log("api에서확인해보는거딜리트", `${PRODUCT_URL}/api/comment/${id}`);
  const res = await axios.delete(`${PRODUCT_URL}/api/comment/${id}`);
  const data = res.data;

  return data;
}

export async function patchComment(id, content) {
  const res = await axios.patch(`${PRODUCT_URL}/api/comment/${id}`, {
    content,
  });
  const data = res.data;

  return data;
}
