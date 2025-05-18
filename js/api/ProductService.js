const BASE_URL = "https://sprint-mission-api.vercel.app/products";

export function getProductList(page = 1, pageSize = 100, keyword = "") {
  const url = new URL(BASE_URL);
  url.searchParams.append("page", page);
  url.searchParams.append("pageSize", pageSize);
  if (keyword) {
    url.searchParams.append("keyword", keyword);
  }

  return fetch(url.toString(), {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP 상태 ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error("상품 조회 실패", err.message);
      throw err;
    });
}

export function getProduct(id) {
  const url = new URL(`${BASE_URL}/${id}`);

  return fetch(url.toString(), {
    method: "GET",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP 상태 ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error("상품 상세 조회 실패", err.message);
      throw err;
    });
}

export function createProduct({
  name,
  description,
  price,
  manufacturer,
  tags,
  image,
}) {
  const url = new URL(BASE_URL);

  return fetch(url.toString(), {
    method: "POST",
    headers: { "Contet-Type": "application/json" },
    body: JSON.stringify({
      name,
      description,
      price,
      manufacturer,
      tags,
      image,
    }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP 상태 ${res.status}`);
      }
    })
    .catch((err) => {
      console.error("상품 상세 조회 실패", err.message);
      throw err;
    });
}

export async function patchProduct(
  id,
  { name, description, price, tags, image }
) {
  const url = new URL(`${BASE_URL}/${id}`);

  try {
    const res = await fetch(url.toString(), {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, description, price, tags, image }),
    });

    if (!res.ok) {
      throw new Error(`HTTP 상태 ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error("상품 수정 실패", err.message);
    throw err;
  }
}

export async function deleteProduct(id) {
  const url = new URL(`${BASE_URL}/${id}`);

  try {
    const res = await fetch(url.toString(), {
      method: "DELETE",
    });

    if (!res.ok) {
      throw new Error(`HTTP 상태 ${res.status}`);
    }
    return await res.json();
  } catch (err) {
    console.error("상품 삭제 실패", err.message);
    throw err;
  }
}
