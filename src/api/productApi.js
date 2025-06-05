const BASE_URL = `https://panda-market-api.vercel.app/products`;

export const getProductList = async (
  page = 1,
  pageSize = 10,
  orderBy = "recent",
  keyword = ""
) => {
  const url = new URL(BASE_URL);
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize);
  url.searchParams.append("orderBy", orderBy);
  if (keyword) {
    url.searchParams.append("keyword", keyword);
  }

  try {
    const res = await fetch(url.toString(), {
      method: "GET",
    });

    if (!res.ok) {
      throw new Error(`HTTP 상태 ${res.status}`);
    }

    const data = await res.json();
    // data 객체는 totalCount, list 프로퍼티
    return data;
  } catch (err) {
    console.error("상품 조회 실패 : ", err.message);
    throw err;
  }
};
