const url = "https://panda-market-api.vercel.app";
export const getProduct = async (productFetchQuery) => {
  const productQuery = {
    ...productFetchQuery,
    orderBy: productFetchQuery.orderBy.key,
  };
  const queries = new URLSearchParams(productQuery);
  try {
    const res = await fetch(`${url}/products?${queries.toString()}`);
    if (!res.ok) {
      throw new Error();
    }

    const data = await res.json();
    return data;
  } catch (error) {
    console.error(error);
    throw new Error("데이터 페칭 실패");
  }
};
