const BASE_URL = "https://panda-market-api.vercel.app/products";

export const fetchSalesItems = async ({ page, pageSize, orderBy }) => {
  try {
    const res = await fetch(
      `${BASE_URL}?page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`
    );
    const data = await res.json();
    return data.list || [];
  } catch (error) {
    console.error("판매 상품 가져오기 실패:", error);
    return [];
  }
};

export const fetchBestItems = async ({ pageSize }) => {
  try {
    const res = await fetch(
      `${BASE_URL}?page=1&pageSize=${pageSize}&orderBy=favorite`
    );
    const data = await res.json();
    return data.list || [];
  } catch (error) {
    console.error("베스트 상품 가져오기 실패:", error);
    return [];
  }
};

export const searchItems = async (keyword) => {
  try {
    const res = await fetch(`${BASE_URL}?keyword=${keyword}`);
    const data = await res.json();
    return data.list || [];
  } catch (error) {
    console.error("검색 실패:", error);
    return [];
  }
};
