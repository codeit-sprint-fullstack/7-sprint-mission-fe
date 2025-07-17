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
