import { API_BASE_URL, ORDER_BY, PAGE_SIZE } from "./index";

export function getArticlePath({
  page = 1,
  pageSize = PAGE_SIZE,
  orderBy = ORDER_BY,
} = {}) {
  return `${API_BASE_URL}/articles?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
}
