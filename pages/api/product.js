import axios from "axios";
const PRODUCT_URL = "http://localhost:5000";

export async function fetchCommentList() {
  const res = await axios.get(`${PRODUCT_URL}/api/comment/product`);
  const data = res.data;

  return data;
}
