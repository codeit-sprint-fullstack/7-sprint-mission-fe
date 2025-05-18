import {
  getArticleList,
  createArticle,
  getArticle,
  patchArticle,
  deleteArticle,
} from "./api/ArticleService.js";
import {
  getProductList,
  getProduct,
  createProduct,
  patchProduct,
  deleteProduct,
} from "./ProductService.js";

// 게시글 리스트 조회 테스트
function testGetArticleList() {
  getArticleList(1, 5, "")
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error("게시글 리스트 조회 실패", err);
    });
}

// 게시글 생성 테스트
function testCreateArticle() {
  createArticle({
    title: "게시글 생성 테스트",
    content: "게시글 생성 테스트중",
    image: "https://dummyimage.com/400x600/000/fff&text=test",
  })
    .then((article) => {
      console.log(article);
    })
    .catch((err) => {
      console.error("게시글 생성 실패", err);
    });
}

// 단일 게시글 조회 테스트
function testGetArticle(articleId) {
  getArticle(articleId)
    .then((article) => {
      console.log(article);
    })
    .catch((err) => {
      console.error("단일 게시글 조회 실패", err);
    });
}

// 게시글 수정 테스트
function testPatchArticle(articleId) {
  patchArticle(articleId, {
    title: "게시글 수정 테스트",
    content: "수정 완료",
    image: "https://dummyimage.com/400x600/000/fff&text=patchtest",
  })
    .then((updatedArticle) => {
      console.log(updatedArticle);
    })
    .catch((err) => {
      console.error("게시글 수정 실패", err);
    });
}

// 게시글 삭제 테스트
function testDeleteArticle(articleId) {
  deleteArticle(articleId)
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.error("게시글 삭제 실패:", err.message);
    });
}

// 게시글 관련 함수 테스트 호출
// testGetArticleList();
// testCreateArticle();
// testGetArticle();
// testPatchArticle();
// testDeleteArticle();

//상품 리스트 조회 테스트
function testGetProductList() {
  getProductList(1, 5, "")
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error("상품 리스트 조회 실패", err.message);
    });
}

//특정 상품 조회 테스트
function testGetProduct(id) {
  getProduct(id)
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error("상품 상세 조회 실패", err.message);
    });
}

//상품 등록 테스트
function testCreateProduct() {
  createProduct({
    name: "상품 등록 테스트",
    description: "상품 등록 테스트 중",
    price: 12345,
    manufacturer: "test",
    tags: ["테스트", "test"],
    image: "https://dummyimage.com/600x400/000/fff&text=product+test",
  })
    .then((product) => {
      console.log(product);
    })
    .catch((err) => {
      console.error("상품 등록 실패", err.message);
    });
}

// 상품 수정 테스트
function testPatchProduct(id) {
  patchProduct(id, {
    name: "상품 수정 테스트",
    description: "상품 수정 테스트 중",
    price: 54321,
    tags: ["수정", "테스트"],
    image: "https://dummyimage.com/600x400/000/fff&text=patchproduct",
  })
    .then((product) => {
      console.log(product);
    })
    .catch((err) => {
      console.error("상품 수정 실패", err.message);
    });
}

// 상품 삭제 테스트
function testDeleteProduct(id) {
  deleteProduct(id)
    .then((result) => {
      console.log("상품 삭제 성공");
      console.log(result);
    })
    .catch((err) => {
      console.error("상품 삭제 실패", err.message);
    });
}

// 게시글 관련 함수 테스트 호출
// testGetProductList();
// testGetProduct();
// testCreateProduct();
// testPatchProduct();
// testDeleteProduct();
