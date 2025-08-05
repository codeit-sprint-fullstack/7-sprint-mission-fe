import axios from "axios";
import newapi from "@/pages/api/newapi";

const REAL_URL = "https://panda-market-api.vercel.app";

export async function realGetArticles(
  page = 1,
  pageSize = 10,
  orderBy = "recent"
) {
  const res = await axios.get(`${REAL_URL}/articles`, {
    params: {
      page,
      pageSize,
      orderBy,
    },
  });
  const data = res.data;

  return data;
}

export async function relGetArticlesById(id) {
  const token = localStorage.getItem("accessToken");
  const res = await newapi.get(`${REAL_URL}/articles/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  const data = res.data;

  return data;
}

export async function realPostComment(content, productId) {
  const token = localStorage.getItem("accessToken");
  const res = await newapi.post(
    `${REAL_URL}/products/${productId}/comments`,
    {
      content,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = res.data;

  return data;
}

export async function realGetCommentList(productId, limit = 10) {
  try {
    const res = await axios.get(`${REAL_URL}/products/${productId}/comments`, {
      params: {
        limit,
      },
    });
    const data = res.data;

    return data;
  } catch (error) {
    console.log(error);
    return;
  }
}

export async function realDeleteComment(id) {
  const token = localStorage.getItem("accessToken");
  const res = await newapi.delete(`${REAL_URL}/comments/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = res.data;

  return data;
}

export async function realPostArticles(image, content, title) {
  const token = localStorage.getItem("accessToken");
  const res = await axios.post(
    `${REAL_URL}/articles`,
    {
      image,
      content,
      title,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  const data = res.data;

  return data;
}

export async function realPatchArticles(params) {
  
}