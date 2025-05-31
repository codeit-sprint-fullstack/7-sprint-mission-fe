import axios from "axios";

const PRODUCTS_BASE_URL = "https://panda-market-api.vercel.app/products";

// 1. 상품 목록 조회
export function getProductList(
  page = 1,
  pageSize = 10,
  keyword = "",
  orderBy = "recent"
) {
  return axios
    .get(PRODUCTS_BASE_URL, {
      params: { page, pageSize, keyword, orderBy },
    })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        console.error("상품 목록 조회 실패:", res.status, "getProductList");
      }
    })
    .catch((err) => {
      console.error("에러 발생:", err.message, "getProductList");
    });
}

// 2. 단일 상품 조회
export function getProduct(id) {
  return axios
    .get(`${PRODUCTS_BASE_URL}/${id}`)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        console.error("상품 조회 실패:", res.status);
      }
    })
    .catch((err) => {
      console.error("에러 발생:", err.message);
    });
}

// 3. 상품 생성
export function createProduct({ name, description, price, tags, images }) {
  return axios
    .post(PRODUCTS_BASE_URL, { name, description, price, tags, images })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        console.error("상품 생성 실패:", res.status);
      }
    })
    .catch((err) => {
      console.error("에러 발생:", err.message);
    });
}

// 4. 상품 수정
export function patchProduct(id, { name, description, price, tags, images }) {
  return axios
    .patch(`${PRODUCTS_BASE_URL}/${id}`, {
      name,
      description,
      price,
      tags,
      images,
    })
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        return res.data;
      } else {
        console.error("상품 수정 실패:", res.status);
      }
    })
    .catch((err) => {
      console.error("에러 발생:", err.message);
    });
}

// 5. 상품 삭제
export function deleteProduct(id) {
  return axios
    .delete(`${PRODUCTS_BASE_URL}/${id}`)
    .then((res) => {
      if (res.status >= 200 && res.status < 300) {
        console.log("상품 삭제 성공");
        return res.data;
      } else {
        console.error("상품 삭제 실패:", res.status);
      }
    })
    .catch((err) => {
      console.error("에러 발생:", err.message);
    });
}
