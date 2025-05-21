import axios from "axios";
const ARTICLE_BASE_URL = "https://sprint-mission-api.vercel.app/articles";

// 1. 아티클 목록 조회
export function getArticleList(page = 1, pageSize = 10, keyword = "") {
  return axios
    .get(ARTICLE_BASE_URL, {
      params: {
        page,
        pageSize,
        keyword,
      },
    })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        console.error("리스트 가져오기 실패:", res.status);
      }
    })
    .catch((err) => {
      console.error("에러 발생:", err.message);
    });
}

// 2. 단일 아티클 조회
export function getArticle(id) {
  return axios
    .get(`${ARTICLE_BASE_URL}/${id}`)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        console.error("아티클 조회 실패:", res.status);
      }
    })
    .catch((err) => {
      console.error("에러 발생:", err.message);
    });
}

// 3. 아티클 생성
export function createArticle({ title, content, image }) {
  return axios
    .post(ARTICLE_BASE_URL, { title, content, image })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        console.error("아티클 생성 실패:", res.status);
      }
    })
    .catch((err) => {
      console.error("에러 발생:", err.message);
    });
}

//4. 아티클 수정
export function patchArticle(id, { title, content, image }) {
  return axios
    .patch(`${ARTICLE_BASE_URL}/${id}`, { title, content, image })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        console.error("아티클 수정 실패:", res.status);
      }
    })
    .catch((err) => {
      console.error("에러 발생:", err.message);
    });
}

//아티클 삭제
export function deleteArticle(id) {
  return axios
    .delete(`${ARTICLE_BASE_URL}/${id}`)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        console.log("아티클 삭제 성공");
        return res.data;
      } else {
        console.error("삭제 실패:", res.status);
      }
    })
    .catch((err) => {
      console.error("에러 발생:", err.message);
    });
}
