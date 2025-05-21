const BASE_URL = "https://sprint-mission-api.vercel.app/articles";

export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  return fetch(
    `${BASE_URL}?page=${page}&pageSize=${pageSize}&keyword=${keyword}`
  )
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.json();
    })
    .then((data) => console.log("게시글 목록:", data))
    .catch((error) => console.error(error.message));
}

export function getArticle(id) {
  return fetch(`${BASE_URL}/${id}`)
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.json();
    })
    .then((data) => console.log("게시글 상세:", data))
    .catch((error) => console.error(error.message));
}

export function createArticle({ title, content, image }) {
  return fetch(BASE_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, image }),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.json();
    })
    .then((data) => console.log("게시글 생성:", data))
    .catch((error) => console.error(error.message));
}

export function patchArticle(id, updateData) {
  return fetch(`${BASE_URL}/${id}`, {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  })
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.json();
    })
    .then((data) => console.log("게시글 수정:", data))
    .catch((error) => console.error(error.message));
}

export function deleteArticle(id) {
  return fetch(`${BASE_URL}/${id}`, { method: "DELETE" })
    .then((res) => {
      if (!res.ok) throw new Error(`Error: ${res.status}`);
      return res.text();
    })
    .then((data) => console.log(`게시글 삭제 완료: ${id}`))
    .catch((error) => console.error(error.message));
}
