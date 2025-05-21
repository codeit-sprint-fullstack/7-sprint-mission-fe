const BASE_URL = "https://sprint-mission-api.vercel.app/articles";

// 게시글 리스트 조회
export function getArticleList(page = 1, pageSize = 100, keyword = "") {
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
      console.error("게시글 조회 실패", err.message);
      throw err;
    });
}

// 게시글 생성
export function createArticle({ title, content, image }) {
  const url = new URL(BASE_URL);

  return fetch(url.toString(), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, image }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP 상태 ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error("게시글 생성 실패", err.message);
      throw err;
    });
}

// 특정 단일 조회
export function getArticle(id) {
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
      console.error("게시글 조회 실패", err.message);
      throw err;
    });
}

// 게시글 수정
export function patchArticle(id, { title, content, image }) {
  const url = new URL(`${BASE_URL}/${id}`);

  return fetch(url.toString(), {
    method: "PATCH",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ title, content, image }),
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP 상태 ${res.status}`);
      }
      return res.json();
    })
    .catch((err) => {
      console.error("게시글 수정 실패", err.message);
      throw err;
    });
}

// 게시글 삭제
export function deleteArticle(id) {
  const url = new URL(`${BASE_URL}/${id}`);

  return fetch(url.toString(), {
    method: "DELETE",
  })
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP 상태 ${res.status}`);
      }
      if (res.status === 204) {
        return { message: "삭제 성공 (204 No Content)" };
      }
      return res.json();
    })
    .catch((err) => {
      console.error("게시글 삭제 실패", err.message);
      throw err;
    });
}
