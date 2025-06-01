export async function getProducts({
  orderBy = "recent",
  page = 1,
  pageSize = 10,
}) {
  const query = `page=${page}&pageSize=${pageSize}&orderBy=${orderBy}`;
  const response = await fetch(
    `https://panda-market-api.vercel.app/products?${query}`
  );
  const body = await response.json();
  return body;
}

export async function getBestProducts() {
  const response = await fetch(
    "https://panda-market-api.vercel.app/products?page=1&pageSize=4&orderBy=favorite"
  );
  const body = await response.json();
  return body;
}
