const BASE_URL = "https://sprint-mission-api.vercel.app/products";

export function getProductList(page = 1, pageSize = 10, keyword = "") {
  return fetch(
    `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.json();
    })
    .then((data) => console.log("상품 목록:", data))
    .catch((error) => console.error(error.message));
}

export function getProduct(id) {
  return fetch(`${BASE_URL}/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.json();
    })
    .then((data) => console.log("상품 상세:", data))
    .catch((error) => console.error(error.message));
}

export function createProduct({ name, description, price, tags, images }) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, description, price, tags, images }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.json();
    })
    .then((data) => console.log("상품 생성:", data))
    .catch((error) => console.error(error.message));
}

export function patchProduct(id, updateData) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.json();
    })
    .then((data) => console.log("상품 수정:", data))
    .catch((error) => console.error(error.message));
}

export function deleteProduct(id) {
  return fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.text();
    })
    .then((data) => console.log(`상품 삭제 완료: ${id}`))
    .catch((error) => console.error(error.message));
}
