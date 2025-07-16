import axios from "axios";
const PRODUCT_URL = "http://localhost:5000";

export async function fetchCommentList() {
  try {
    const res = await axios.get(`${PRODUCT_URL}/api/comment/product`);
    const data = res.data;

    return data;
  } catch (error) {
    console.error("API[fetchCommentList] error: ", error);
  }
}

export async function fetchUserList() {
  try {
    const res = await axios.get(`${PRODUCT_URL}/api/user`);
    const data = res.data;

    return data;
  } catch (error) {
    console.error("API[fetchUserList] error :", error);
  }
}

export async function postBoard(title, content, userId) {
  console.log("유저정보값넘어옴?", userId);
  try {
    const res = await axios.post(`${PRODUCT_URL}/api/articles`, {
      title,
      content,
      userId,
    });
    const data = res.data;
    console.log("api에서 오류뜨는거야? data", data);
    return data;
  } catch (error) {
    console.error("API[postBoard] error : ", error);
  }
}

export async function getBoardById(id) {
  const res = await axios.get(`${PRODUCT_URL}/api/articles/${id}`);
  const data = res.data;

  return data;
}

export async function getAricleList(sort) {
  try {
    const res = await axios.get(`${PRODUCT_URL}/api/articles`, {
      params: { sort },
    });
    const data = res.data;

    return data;
  } catch (error) {
    console.error("API[getAricleList] error :", error);
  }
}

export async function postComment({ userId, articleId, productId, content }) {
  const res = await axios.post(`${PRODUCT_URL}/api/comment`, {
    userId,
    articleId,
    content,
    productId,
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

export async function patchArticle(id, title, content) {
  const res = await axios.patch(`${PRODUCT_URL}/api/articles/${id}`, {
    title,
    content,
  });
  const data = res.data;

  return data;
}

export async function getProductById(id) {
  try {
    const res = await axios.get(`${PRODUCT_URL}/api/products/${id}`);
    console.log("지금 문제뭘까?", res);
    const data = res.data;
    return data;
  } catch (error) {
    console.error("API[getProductById] error: ", error);
  }
}

export async function getCommentListByProductId(productId) {
  const res = await axios.get(
    `${PRODUCT_URL}/api/comment/product/${productId}`
  );
  const data = res.data;
  return data;
}
