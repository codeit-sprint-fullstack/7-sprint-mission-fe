import axios from "axios";

const BASE_URL = "https://panda-market-api.vercel.app";

export async function getProduct(page = 1, pageSize = 10, orderBy = "recent") {
  const token = localStorage.getItem("accessToken");

  const res = await axios.get(`${BASE_URL}/products`, {
    params: {
      page,
      pageSize,
      orderBy,
    },
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  return res.data;
}

export async function getProductById(id) {
  const token = localStorage.getItem("accessToken");

  const res = await axios.get(`${BASE_URL}/products/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = res.data;
  return data;
}

