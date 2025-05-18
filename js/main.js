import {
  getArticleList,
  createArticle,
  getArticle,
  patchArticle,
  deleteArticle,
} from "./api/ArticleService.js";

// 게시글 리스트 조회 테스트
function testGetArticleList() {
  getArticleList(1, 5, "테스트")
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

testGetArticleList();
testCreateArticle();
testGetArticle();
testPatchArticle();
testDeleteArticle();
