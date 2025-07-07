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
