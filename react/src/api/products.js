export async function getProducts({
  orderBy = "recent",
  page = 1,
  pageSize = 10,
}) {
  try {
    const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
    const response = await fetch(
      `https://panda-market-api.vercel.app/products?${query}`
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const body = await response.json();
    return body;
  } catch (error) {
    console.error("상품 데이터를 가져오는데 실패했습니다:", error);
    throw error;
  }
}

export async function getBestProducts() {
  try {
    const response = await fetch(
      "https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite"
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const body = await response.json();
    return body;
  } catch (error) {
    console.error("데이터 정렬 중 에러가 발생했습니다:", error);
    throw error;
  }
}
